import "./GalleryItems.css";
import { GrLinkNext } from "react-icons/gr";

interface Props {
  GalleryImage: string ;
  GalleryText : string ;
}

const GalleryItems = ({ GalleryImage , GalleryText }: Props) => {
  return (
    <figure className="GalleryItems">
      <img className="GalleryItems_Img" src={GalleryImage} alt="" />
      <div className="GalleryItems_text">
        <a href={GalleryText}>{GalleryText}</a>
          <GrLinkNext className="icon" color="#fff"/>
      </div>
    </figure>
  );
};

export default GalleryItems;
