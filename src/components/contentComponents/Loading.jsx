const Loading = () => {
  // Render Loading
  return (
    <section className="h-full w-full flex mt-[20%] justify-center items-center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Loading;
