import CategoryItem from "../category-item/category-item.component"
import "./menu.styles.scss"

const Menu = () => {
    const categories = [
        {
          id:1,
          title: "Fluid Art",
          imageUrl: "https://github.com/sethanimesh/runjhun-art-studio/blob/main/Images/Fluid%20Art/Fluid%20art%202.jpg?raw=true",
        },
        {
          id:2,
          title: "Abstract Paintings",
          imageUrl: "https://github.com/sethanimesh/runjhun-art-studio/blob/main/Images/Abstract/Sparkel%20away.jpg?raw=true",
        },
        {
          id:3,
          title: "Dot Pantings",
          imageUrl: "https://github.com/sethanimesh/runjhun-art-studio/blob/main/Images/Dot%20Paintings/Window%20of%20light.jpg?raw=true",
        },
        {
          id:4,
          title: "Mandala Paintings",
          imageUrl: "https://github.com/sethanimesh/runjhun-art-studio/blob/main/Images/Mandala/Good%20luck.jpg?raw=true",
        },
        {
          id:5,
          title: "Quiling Art",
          imageUrl: "https://github.com/sethanimesh/runjhun-art-studio/blob/main/Images/Quilling/Quilling%20group%201.jpg?raw=true",
        },
        {
          id:6,
          title: "Zentangle",
          imageUrl: "https://github.com/sethanimesh/runjhun-art-studio/blob/main/Images/Zentagle/Pattern%20of%20life.jpg?raw=true",
        },
      ]
    
      return (
        <div className="categories-container">
          {categories.map((category)=>(<CategoryItem category={category}/>))}
          
        </div>
      )
}

export default Menu;