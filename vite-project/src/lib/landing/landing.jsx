import React, { useEffect, useState } from "react"

const images = import.meta.glob('../../images/letters/*.jpg', { eager: true})

export function Landing() {
    const [isShuffled, setIsShuffled] = useState(true)
    const [imageList, setImageList] = useState(Object.keys(images).map((image) => {     
        const path = image.replace("../../images/letters", "/src/images/letters")
        const name = image.replace("../../images/letters/", "")
        return {name, path}
    }))

    const imageObj = Object.fromEntries(Object.keys(images).map((image) => {     
        const path = image.replace("../../images/letters", "/src/images/letters")
        const name = image.replace("../../images/letters/", "")
        return [name, path]
    }));

    useEffect(() => {
        console.log(imageObj)
    }, [])
    
    function shuffleImageList() {
        setIsShuffled(!isShuffled);
        if (!isShuffled) return;

        const array = imageList

        let currentIndex = array.length;

        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        setImageList(array)
    }

    const juan = ["j.jpg", "u.jpg", "a1.jpg", "n1.jpg"]
    const antonio = ["a2.jpg", "n2.jpg", "t.jpg", "o1.jpg", "n3.jpg", "i.jpg", "o2.jpg"]
    const gonzalez = ["g.jpg", "o3.jpg", "n4.jpg", "z1.jpg", "a3.jpg", "l.jpg", "e.jpg", "z2.jpg"]

    return (
        <div>
            <button onClick={() => shuffleImageList()}>{isShuffled? "Order": "Shuffle"} </button>
            {isShuffled &&
                imageList.map((image) => <img key={image.name} src={image.path} />)
            }
            {!isShuffled && (
                <div>
                    <OrderedName nameList={juan} imagesObj={imageObj} />
                    <OrderedName nameList={antonio} imagesObj={imageObj} />
                    <OrderedName nameList={gonzalez} imagesObj={imageObj} /> 
                </div>
            )}
        </div>
    )
}

function OrderedName({nameList, imagesObj}) {
    return (
        <div>
            {nameList.map((name, key) => <img key={key} src={imagesObj[name]} />)}
        </div>
    )
}
