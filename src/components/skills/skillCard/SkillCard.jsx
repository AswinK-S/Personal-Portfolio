import './SkillCard.css'
import propTypes from 'prop-types'

const SkillCard = ({title,iconUrl,isActive,onClick}) => {
  return (
    <div 
    className={`skills-card ${isActive ?'active':''}`}
    onClick={()=>onClick()}
    >

        <div className='skill-icon'>
            <img src={iconUrl} alt={title} />
        </div>

        <span>{title}</span>
    </div>
  )
}

SkillCard.propTypes={
    title :propTypes.string.isRequired,
    iconUrl:propTypes.string.isRequired,
    isActive:propTypes.string.isRequired,
    onClick:propTypes.func.isRequired
}

export default SkillCard