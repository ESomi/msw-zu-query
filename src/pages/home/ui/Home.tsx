export const Home = () => {
  return (
    <>
      <div>
        <span>
          <img src={'/msw-logo.svg'} className="logo msw" alt="MSW logo"/>
        </span>
        <span>
          <img src={'/reactquery-logo.svg'} className="logo reactquery" alt="React Query logo"/>
        </span>
        <span>
          <img src={'/zustand-logo.svg'} className="logo zustand" alt="Zustand logo"/>
        </span>
      </div>
      <h2>MSW + React Query + Zustand</h2>
      <div style={{width: '50%', margin: 'auto'}}>
        <p>Integration of Zustand for client state, React Query for server state, and MSW for mock APIs</p>
      </div>
    </>
  );
};

