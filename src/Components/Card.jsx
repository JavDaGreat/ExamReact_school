import chip from '../assets/chip-dark.svg'
import evil from'../assets/vendor-evil.svg'
import bitcoin from'../assets/vendor-bitcoin.svg'
import ninja from'../assets/vendor-ninja.svg'
import blockchain from'../assets/vendor-blockchain.svg'
import Bank from '../assets/Bank.svg'
import remove from '../assets/remove.svg'
import activ from '../assets/Activ.svg'
import { useDispatch } from 'react-redux'
import { removeCard,switchCard } from '../Store'


function Card({CardDetail,cardStack}) {
   const vendorsLogo=[bitcoin,evil,ninja,blockchain]
   const Dispatch=useDispatch()
 let imgLogo=''




const handleFavorit= ()=>{  
  Dispatch(switchCard(CardDetail))


}
const handleDelete=()=>{
  Dispatch(removeCard(CardDetail))
  localStorage.removeItem('myData', JSON.stringify(CardDetail))

  



}

 const deleteButton=<img src= {remove} alt="" onClick={ handleDelete }  className='interactiv' style={{backgroundColor:'red'}}/>
 const activButton= <img src={activ} alt="" onClick={handleFavorit} className='interactiv' />
 
  if(CardDetail?.vendor == 'bitcoin'){
 imgLogo=vendorsLogo[0]

  }else if(CardDetail?.vendor == 'evil'){
    imgLogo=vendorsLogo[1]
  }else if(CardDetail?.vendor == 'ninja'){
    imgLogo=vendorsLogo[2]
  }else if(CardDetail?.vendor == 'blockchain'){
    imgLogo=vendorsLogo[3]}

   

  return <div className={`card ${CardDetail?.vendor}`}  >
   <div className='card-svg '> {cardStack &&  deleteButton} {cardStack && activButton}</div>

 
   <div className="card-svg"> <img src={chip} alt="chip" /> <img src={imgLogo || Bank} alt="vendor"/> </div>

   <div className="cardNumber">{CardDetail?.cardNr || `XXXX XXXX XXXX XXXX`}</div>
   <div className="cardDetail"> <div><p>CARDHOLDER NAME</p> <span>{CardDetail?.name || 'Your Name'}</span></div> <div> <p>VALID THRU</p> <span>{CardDetail?.expiry || 'MM/YY'}</span></div></div>




  </div>
}

export default Card