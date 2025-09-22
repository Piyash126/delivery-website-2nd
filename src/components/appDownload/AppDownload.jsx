import appStore from "../../assets/frontend_assets/app_store.png";
import playStore from "../../assets/frontend_assets/play_store.png";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br />
        Tomato App
      </p>
      <div className="app-download-platforms">
        <img src={playStore} alt="" />
        <img src={appStore} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
