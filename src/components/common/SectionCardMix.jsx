import React from 'react';
import s from '../../../styles/components/common/SectionCardMix.styles.js';
import { COACHING_PRICE_LIST } from '../../helper/CareerAdvice.js';

const SectionCardMix = () => {
    const toggleDetail = (e) => {
        e.preventDefault();
        if (e.currentTarget.getAttribute('aria-expanded') == 'true') {
            e.currentTarget.setAttribute('aria-expanded', 'false');
            e.currentTarget.querySelector('.toggle-text').innerHTML = 'Show Details';
            e.currentTarget.querySelector('.fa').classList.remove('fa-angle-up');
            e.currentTarget.querySelector('.fa').classList.add('fa-angle-down');
        } else {
            e.currentTarget.setAttribute('aria-expanded', 'true');
            e.currentTarget.querySelector('.toggle-text').innerHTML = 'Hide Details';
            e.currentTarget.querySelector('.fa').classList.remove('fa-angle-down');
            e.currentTarget.querySelector('.fa').classList.add('fa-angle-up');
        }
    };

    return (
        <s.SectionCardMix>
            <s.Heading>One-on-One Personalized Career Coaching Services</s.Heading>
            <s.P>
                FlexJobs offers expert career services at up to 35% off compared to
                other services to support you in your search for a remote or flexible
                job!
            </s.P>
            <s.PriceCardVertWrap>
                {COACHING_PRICE_LIST.slice(0, 3).map((item, index) => (
                    <s.PriceCardVert key={index}>
                        <s.PriceCardVertImg
                            src={item.imgSrc}
                            className='card-img-top'
                            alt={item.imgInfo}
                            aria-hidden='true'
                            title={item.imgInfo}
                        />
                        <s.PriceCardVertBody>
                            <s.PriceCardVertDesc>
                                <s.PriceCardVertHeading>{item.service}</s.PriceCardVertHeading>
                                <s.PriceInfo>
                                    <s.Price>{item.price}</s.Price>
                                    <s.Slash>/</s.Slash>
                                    <s.PriceText dangerouslySetInnerHTML={{ __html: item.priceInfo }} />
                                </s.PriceInfo>
                            </s.PriceCardVertDesc>
                            <s.ToggleLink
                                className='toggle-upsell-details'
                                href='#collapseExample'
                                aria-expanded='false'
                                aria-controls='collapseTxt1'
                                onClick={toggleDetail}
                            >
                                <span className='toggle-text'>Show Details</span>
                                <i className='fa fa-angle-down' />
                            </s.ToggleLink>
                            <s.ToggleP className='collapse' id='collapseTxt1'>
                                {item.detail}
                            </s.ToggleP>
                            <s.LinkMore
                                href={item.moreHref}
                            >
                                Learn More
                            </s.LinkMore>
                        </s.PriceCardVertBody>
                    </s.PriceCardVert>
                ))}
            </s.PriceCardVertWrap>
            {COACHING_PRICE_LIST.slice(-2).map((item, index) => (
                <s.PriceCardVert block key={index}>
                    <div className={`img-col ${item.imgClass}`}/>
                    <div className='card-body'>
                        <s.PriceCardVertHeading>{item.service}</s.PriceCardVertHeading>
                        <p className='detail'>{item.detail}</p>
                    </div>
                    <div className='price-col'>
                        <s.PriceInfo block>
                            <s.Price>{item.price}</s.Price>
                            <s.Slash>/</s.Slash>
                            <s.PriceText dangerouslySetInnerHTML={{ __html: item.priceInfo }} block />
                        </s.PriceInfo>
                        <s.LinkMore
                                href={item.moreHref}
                            >
                                Learn More
                            </s.LinkMore>
                    </div>
                </s.PriceCardVert>
            ))}
        </s.SectionCardMix>
    );
};

export default SectionCardMix;
