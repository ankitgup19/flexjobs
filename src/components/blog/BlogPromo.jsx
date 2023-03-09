import React from "react";
import { BlogPromoWrap, LinkBtn } from "../../../styles/components/common/BlogPromo.style.js";

const BlogPromo = () => {

    return (
        <BlogPromoWrap>
            <div id="rocket-promo" className="card">
                <img src="https://www.flexjobs.com/images/img-sidebar-cta.svg" className="card-img" alt="rocket ship image" aria-hidden="true" title="rocket ship image" />
                <div className="card-body">
                    <h3 className="promo-title">Want a Great Remote<br/>or Flexible Job?</h3>
                    <p className="promo-text">Save time and find higher-quality jobs than on other sites, guaranteed.</p>
                    <LinkBtn href="/registration/signup">Join FlexJobs Now!</LinkBtn>
                </div>
            </div>
        </BlogPromoWrap>
    )
}

export default BlogPromo;