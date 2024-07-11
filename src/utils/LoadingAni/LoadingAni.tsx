import { ThreeDots } from 'react-loader-spinner'
const LoadingAni = () => {
  return (
    <div className="flex justify-center items-center py-24">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"   
      />
    </div>
  );
};
export default LoadingAni;
