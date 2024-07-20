import './index.css'

const AnimalEach = (props) => {
    const {animalDetails,clickImage} = props
    const {thumbnailUrl} = animalDetails
    const onSelectImage= () => {
        clickImage(thumbnailUrl)
    }
    return (
        <>
        <div>
            <button onClick={onSelectImage}>
            <img className="image-animal" src={thumbnailUrl} alt="Ram"/>
            </button>
        </div>
        </>
    )
}

export default AnimalEach