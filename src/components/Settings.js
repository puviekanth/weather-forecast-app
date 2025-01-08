import '../styles/components/Settings.scss'
function Settings(){
    return(
        <>
        <div className="Settings">
            <div className="theme-toggler">
                <div className="theme-buttons">
                    <div className="light-theme-btn ">
                    <i class="bi bi-sun"></i>
                    </div>
                    <div className="dark-theme-btn active">
                    <i class="bi bi-moon"></i>
                    </div>
                </div>
            </div>
            <div className="settings-btn">
            <i class="bi bi-gear-fill"></i>
            </div>
        </div>
        </>
    );
}
export default Settings;

