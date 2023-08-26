import * as React from 'react';
import './style.css';
import SingelHouse from '../../../../Components/SingleHouse';  
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const houseData: any[] = [{
  name: 'Modern Residence in New York',
  address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1687189998949-VC62OPCLDB7HSHAJIA08/PXL_20230617_222750469_Original.jpg'
}, {
  name: 'Hauntingly Beautiful Estate',
  address: ' 169 Warren St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1692121946048-KW67TBGBI3WU2QN2HFCN/Nicholas_weclomepost.jpeg'
}, {
  name: 'Modern Residence in New York',
  address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1690226858902-PNHGIVPTMPKG96RUTR2W/IMG_5675.jpg?format=500w'
}];

class ListProperty extends React.Component<{}, {}> {
  render() {
    return (
      <div className="listProperty">
        <div className="row listPropertyHeader">
          <h3>近期学术成果</h3>
          <h5>Engineering Proteins to Modulate the Immune System</h5>
        </div>
        <div className="row listPropertyContent">
          <h1 style={{textAlign:"center"}}>Meet The Team</h1>
        {/* https://www.npmjs.com/package/react-responsive-carousel */}
        <Carousel showThumbs={false} interval={2000} infiniteLoop={true} autoPlay={true} showStatus={false} className='slide-center'>
                <div>
                    {/* <div style={{backgroundImage:"url(https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/3d4b28dd-e098-4526-ae40-a8de58b60060/KBBQ_labdinner2022.jpg)"}}></div> */}
                    <img src="https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/3d4b28dd-e098-4526-ae40-a8de58b60060/KBBQ_labdinner2022.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/ed4f213e-54bd-4a4d-8d22-722817b3a46e/grouppic_08242022.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img style={{width:"125%"}} src="https://images.squarespace-cdn.com/content/v1/5e729010626ebf110b75dfdf/1684184801777-IBDAB07E5SCL7VYR44EP/Lab+2+copy.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            <div style={{height:"3vh"}}></div>
            <h1 style={{textAlign:"center"}}>News</h1>
          {houseData.map((data, index) => {
            return (
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={index}>
                <SingelHouse data={data} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListProperty;