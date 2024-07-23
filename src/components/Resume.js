import { DownloadResume } from "./DownloadResume";

export const Resume = () =>{
    return (
      <DownloadResume
        link="https://drive.google.com/file/d/1Zrpnp0FTMBXw5LbGKVOzGpcW1iszbTqX/view?usp=sharing"
        status="success"
        message="Download completed successfully"
      ></DownloadResume>
    );
}