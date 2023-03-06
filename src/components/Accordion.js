import './Accordion.css'
import React, {useState} from "react";

const Accordion = ({items})=>{
    const [activeIndex, setActiveIndex] = useState(null);
    const onTitleClick = (index)=>{
        setActiveIndex(index);
    }
    const renderedItems = items.map((item, index)=>{
        const active = index === activeIndex ? 'active' : '';
        return <div className="accordion" key={item.title}>
            <div className={`title ${active}`} onClick={()=>onTitleClick(index)}>
                <i></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </div>
    });
    return (
        <div>
            {renderedItems}
        </div>
    );
}

export default Accordion;