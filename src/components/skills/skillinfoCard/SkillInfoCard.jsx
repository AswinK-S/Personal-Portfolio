import React from 'react'
import './SkillInfoCard.css'
import propTypes from 'prop-types'


const SkillInfoCard = ({ heading, skills }) => {
    return (
        <div className='skills-info-card'>
            <h6>{heading}</h6>

            <div className='skills-info-content'>
                {skills.map((item, index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <div className='skill-info'>
                            <p>{item.skills}</p>
                            <p className='percentage'>{item.percentage}</p>
                        </div>
                        <div className='skill-progress-bg'>
                            <div className='skill-progress' style={{width:item.percentage}}>

                            </div>
                        </div>
                    </React.Fragment>
                ))}

            </div>
        </div>
    )
}

SkillInfoCard.propTypes={
    skills:propTypes.array.isRequired,
    heading:propTypes.string.isRequired
}

export default SkillInfoCard