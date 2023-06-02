import './category-item.styles.scss'

const CategoryItem = ({category}) => {
    const {id, title, imageUrl} = category;
return(
        <div key={id} className="category-container">
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="category-body-container">
            <h2>{title}</h2>
            <p>View More</p>
            </div>
          </div>
      )
}

export default CategoryItem