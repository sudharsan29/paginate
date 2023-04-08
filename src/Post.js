import React from "react";
import { Button } from "antd";

const Post=(props) => {
    const {
        postPerPage,
        totalPosts,
        currentPage,
        paginate,
        prevPage,
        nextPage
    } =props;
    const pageNumbers= [];
    for (let i=1; i<=Math.ceil(totalPosts / postPerPage);i++){
        pageNumbers.push(i);
    }
    return(
        <nav>
            <div classname="nav">
                {currentPage !==1 &&(
                    <li>
                        <Button 
                        style={{cursor: "pointer"}}
                        type="primary"
                        onClick={()=> prevPage()}>
                            previous
                        </Button>
                    </li>
                )}
                {
                    pageNumbers.map=((num) =>(
                        <li className="page item"key={num}>
                            <a 
                             onClick={() =>paginate(num)}
                            className="page link"
                            style={{ cursor: "pointer"}}
                            >
                                {num}


                            </a>
                        </li>
                    ))
                }
                
                {
                    pageNumbers.length !== currentPage && (
                        <li>
                            <Button 
                            style={{ cursor: "pointer"}}
                            type="primary"
                            onClick={() => nextPage( )}>
                                next
                            </Button>
                        </li>
                    )
                }
            </div>
        </nav>
    );
};
export default Post;