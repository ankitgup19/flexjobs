import React from "react";

const BlogPost = (props) => {
    return (
        <div className="card">
            <a href={props.href} className="img-link">
                <img src={props.img_url} width={props.width} height={props.height} alt={props.title}/>
            </a>
            <div className="card-body">
                <h4 className="title"><a href={props.href}>{props.name}</a></h4>
                {props.description && <p>{props.description}</p>}
            </div>
        </div>
    )
}

export default BlogPost;