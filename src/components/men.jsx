import Clothe from './clothe';

export default function Components() {
  return (
    <div id='men mt-5'>
      <h1 className="text-orange-500 text-3xl mb-5">Men</h1>
      <div className='flex overflow-x-auto space-x-6'>
        <Clothe></Clothe>
        <Clothe></Clothe>
        <Clothe></Clothe>
        <Clothe></Clothe>
        <Clothe></Clothe>
        <Clothe></Clothe>
        <Clothe></Clothe>
      </div>
    </div>
  );
}
