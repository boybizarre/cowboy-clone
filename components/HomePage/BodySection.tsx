
import Cruiser from './Cruiser'
import CruiserSt from './CruiserSt'
import Classic from './Classic'

const BodySection = () => {
  return (
      <div className='relative z-40 top-[89vh]'>
        <Cruiser />
        <CruiserSt />
        <Classic />
      </div>
  )
}

export default BodySection