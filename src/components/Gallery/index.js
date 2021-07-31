import { capitalizeFirstLetter } from '../../'

function Gallery(props) {
    const currentCategory = {
        name: 'commercial',
        description: 'Photos of grocery stores, food trucks, and other commercial projects',
    };
    return(
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.description}</p>
        </section>
    )
}

export default Gallery;