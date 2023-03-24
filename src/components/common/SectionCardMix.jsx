import React, { useState } from 'react';
import s from '../../../styles/components/common/SectionCardMix.styles.js';
import { COACHING_PRICE_LIST } from '../../helper/CareerAdvice.js';

const SectionCardMix = () => {
    const [toggleStatus, setToggle] = useState([false, false, false]);

    const toggleDetail = (e) => {
        e.preventDefault();
        let newToggleStatus = toggleStatus;
        newToggleStatus[e.currentTarget.getAttribute('data-index')] = !toggleStatus[e.currentTarget.getAttribute('data-index')];
        setToggle([...newToggleStatus]);
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
                    <s.PriceCard key={index}>
                        <s.PriceCardImg
                            src={item.imgSrc}
                            className='card-img-top'
                            alt={item.imgInfo}
                            aria-hidden='true'
                            title={item.imgInfo}
                        />
                        {item.bestValue &&
                            <>
                                <span className='text-warning'>Best Value!</span>
                                <img className='img-star' width='20' src='https://www.flexjobs.com/images/icons/streamline-bold/award_banner_orange.svg' alt='Award banner' title='Award banner'/>
                            </>
                        }
                        <s.PriceCardBody>
                            <s.PriceCardDesc>
                                <s.PriceCardHeading>{item.service}</s.PriceCardHeading>
                                <s.PriceInfo>
                                    <s.Price>{item.price}</s.Price>
                                    <s.Slash>/</s.Slash>
                                    <s.PriceText dangerouslySetInnerHTML={{ __html: item.priceInfo }} />
                                </s.PriceInfo>
                            </s.PriceCardDesc>
                            <a
                                className='toggle-upsell-details'
                                href='#collapseExample'
                                aria-expanded={toggleStatus[index]}
                                aria-controls={`collapseTxt${index}`}
                                onClick={toggleDetail}
                                data-index={index}
                            >
                                <span className='toggle-text'>{toggleStatus[index] ? 'Hide Details' : 'Show Details'}</span>
                                <i className={`fa ${toggleStatus[index] ? 'fa-angle-up' : 'fa-angle-down'}`} />
                            </a>
                            <p className='collapse' id={`collapseTxt${index}`}>
                                {item.detail}
                            </p>
                        </s.PriceCardBody>
                        <div className='card-footer'>
                            <s.LinkMore href={item.moreHref}>
                                Learn More
                            </s.LinkMore>
                        </div>
                    </s.PriceCard>
                ))}
            </s.PriceCardVertWrap>
            {COACHING_PRICE_LIST.slice(-2).map((item, index) => (
                <s.PriceCard block key={index}>
                    <div className={`img-col ${item.imgClass}`} />
                    <div className='card-body'>
                        <s.PriceCardHeading>{item.service}</s.PriceCardHeading>
                        <p className='detail'>{item.detail}</p>
                    </div>
                    <div className='price-col'>
                        <s.PriceInfo block>
                            <s.Price>{item.price}</s.Price>
                            <s.Slash>/</s.Slash>
                            <s.PriceText dangerouslySetInnerHTML={{ __html: item.priceInfo }} block />
                        </s.PriceInfo>
                        <s.LinkMore href={item.moreHref} block>
                            Learn More
                        </s.LinkMore>
                    </div>
                </s.PriceCard>
            ))}
        </s.SectionCardMix>
    );
};

export default SectionCardMix;
