function Special(props) {
    return ( 
        <div className="col-lg-3 col-md-8 d-flex">
                  <img src={props.image} alt="Food image"/>
                  <div className=" text-center  align-items-center p-2">
                      <h4 className='text-bold'>{props.title}</h4>
                      <hr className='lines mb-3'/>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     <p className="text-bold">{Math.floor(Math.random()*20)}$</p>
                  </div>
        </div>
     );
}

export default Special;