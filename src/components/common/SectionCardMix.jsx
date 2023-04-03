import React, { useState } from 'react';
import Styled from '../../../styles/components/common/SectionCardMix.styles.js';
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
        <Styled.SectionCardMix>
            <Styled.Heading>One-on-One Personalized Career Coaching Services</Styled.Heading>
            <Styled.P>
                FlexJobs offers expert career services at up to 35% off compared to
                other services to support you in your search for a remote or flexible
                job!
            </Styled.P>
            <Styled.PriceCardVertWrap>
                {COACHING_PRICE_LIST.slice(0, 3).map((item, index) => (
                    <Styled.PriceCard key={index}>
                        <Styled.PriceCardImg
                            src={item.imgSrc}
                            className='card-img-top'
                            alt={item.imgInfo}
                            aria-hidden='true'
                            title={item.imgInfo}
                        />
                        {item.bestValue &&
                            <>
                                <span className='text-warning'>Best Value!</span>
                                <img
                                    className='img-star'
                                    width='20'
                                    src='https://www.flexjobs.com/images/icons/streamline-bold/award_banner_orange.svg'
                                    alt='Award banner'
                                    title='Award banner' />
                            </>
                        }
                        <Styled.PriceCardBody>
                            <Styled.PriceCardDesc>
                                <Styled.PriceCardHeading>{item.service}</Styled.PriceCardHeading>
                                <Styled.PriceInfo>
                                    <Styled.Price>{item.price}</Styled.Price>
                                    <Styled.Slash>/</Styled.Slash>
                                    <Styled.PriceText dangerouslySetInnerHTML={{ __html: item.priceInfo }} />
                                </Styled.PriceInfo>
                            </Styled.PriceCardDesc>
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
                        </Styled.PriceCardBody>
                        <div className='card-footer'>
                            <Styled.LinkMore href={item.moreHref}>
                                Learn More
                            </Styled.LinkMore>
                        </div>
                    </Styled.PriceCard>
                ))}
            </Styled.PriceCardVertWrap>
            {COACHING_PRICE_LIST.slice(-2).map((item, index) => (
                <Styled.PriceCard block key={index}>
                    <div className={`img-col ${item.imgClass}`} />
                    <div className='card-body'>
                        <Styled.PriceCardHeading>{item.service}</Styled.PriceCardHeading>
                        <p className='detail'>{item.detail}</p>
                    </div>
                    <div className='price-col'>
                        <Styled.PriceInfo block>
                            <Styled.Price>{item.price}</Styled.Price>
                            <Styled.Slash>/</Styled.Slash>
                            <Styled.PriceText dangerouslySetInnerHTML={{ __html: item.priceInfo }} block />
                        </Styled.PriceInfo>
                        <Styled.LinkMore href={item.moreHref} block>
                            Learn More
                        </Styled.LinkMore>
                    </div>
                </Styled.PriceCard>
            ))}
        </Styled.SectionCardMix>
    );
};

export default SectionCardMix;
