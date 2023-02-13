import Logo from "../molecules/header/Logo";


const LoginTemplate = ({ children }) => {
  return (
    <div className="pt-16">
      <div className="w-1/4 flex flex-col mx-auto border pt-20 pb-16 px-8 gap-y-6 relative shadow">
        <div className="absolute top-4 left-2">
          <Logo />
        </div>
        
        {children}
        
      </div>
    </div>
  );
};

export default LoginTemplate;
