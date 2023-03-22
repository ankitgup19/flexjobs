import React from 'react'
import s from '../../../styles/components/common/SectionCardMix.styles.js';

const SectionCardMix = () => {
    const toggleDetail = (e) => {
        e.preventDefault();
        if (e.currentTarget.getAttribute('aria-expanded') == 'true') {
            e.currentTarget.setAttribute('aria-expanded', 'false');
            e.currentTarget.querySelector('.toggle-text').innerHTML = 'Show Details';
            e.currentTarget.querySelector('.fa').classList.remove('fa-angle-up');
            e.currentTarget.querySelector('.fa').classList.add('fa-angle-down');
        }
        else {
            e.currentTarget.setAttribute('aria-expanded', 'true');
            e.currentTarget.querySelector('.toggle-text').innerHTML = 'Hide Details';
            e.currentTarget.querySelector('.fa').classList.remove('fa-angle-down');
            e.currentTarget.querySelector('.fa').classList.add('fa-angle-up');
        }
    }

    return (
        <s.SectionCardMix>
            <s.Heading>One-on-One Personalized Career Coaching Services</s.Heading>
            <s.P>FlexJobs offers expert career services at up to 35% off compared to other services to support you in your search for a remote or flexible job!</s.P>
            <s.PriceCardVertWrap>
                <s.PriceCardVert>
                    <s.PriceCardVertImg src='https://www.flexjobs.com/images/img-coaching.jpg' className='card-img-top' alt='Career Coaching photo' aria-hidden='true' title='Career Coaching photo' />
                    <s.PriceCardVertBody>
                        <s.PriceCardVertDesc>
                            <s.PriceCardVertHeading>Career Coaching</s.PriceCardVertHeading>
                            <s.PriceInfo>
                                <s.Price>$89</s.Price>
                                <s.Slash>/</s.Slash>
                                <s.PriceText>One 30 min call</s.PriceText>
                            </s.PriceInfo>
                        </s.PriceCardVertDesc>
                        <s.ToggleLink className='toggle-upsell-details' href='#collapseExample' aria-expanded='false' aria-controls='collapseTxt1' onClick={toggleDetail}>
                            <span class="toggle-text">Show Details</span>
                            <i className='fa fa-angle-down' />
                        </s.ToggleLink>
                        <s.ToggleP className='collapse' id='collapseTxt1'>Connect with one of our career experts who can answer your questions, offer guidance, and help you get your job search on the right track.</s.ToggleP>
                        <s.LinkMore id='career-coaching' href='/career-coaching' data-purchase='1'>
                            Learn More</s.LinkMore>
                    </s.PriceCardVertBody>
                </s.PriceCardVert>
            </s.PriceCardVertWrap>
        </s.SectionCardMix>
    )
}

export default SectionCardMix;