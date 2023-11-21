import { Parallax } from 'react-parallax';

const Cover = ({img, title, descrption}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div className="hero h-[600px] cover" >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">{title}</h1>
            <p className="mb-5 text-2xl uppercase">{descrption}</p>
           
          </div>
        </div>
      </div>
    </Parallax>
        
    );
};

export default Cover;