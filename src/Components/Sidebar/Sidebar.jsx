import React, { useState } from "react";
import { SidebarDiv, LogoDiv, LogoIcon, IconsDiv, Icon, IconClicked } from "./style";
import Logo from '../../assets/brand_logo.svg';
import Features from '../../assets/features.svg';
import Home from '../../assets/home.svg';
import Settings from '../../assets/settings.svg';
import Notifications from '../../assets/notifications.svg';
import HomeClicked from '../../assets/home_clicked.svg';
import SettingsClicked from '../../assets/settings_clicked.svg';
import FeaturesClicked from '../../assets/features_clicked.svg';

const Sidebar = () => {
    const [clickedIcons, setClickedIcons] = useState([]);

    const handleIconClick = (icon) => {
        setClickedIcons(prevClickedIcons => {
            if (prevClickedIcons.includes(icon)) {
                return prevClickedIcons.filter(clickedIcon => clickedIcon !== icon);
            } else {
                return [...prevClickedIcons, icon];
            }
        });
    };

    const isIconClicked = (icon) => {
        return clickedIcons.includes(icon);
    };

    return (
        <SidebarDiv>
            <LogoDiv>
                <LogoIcon src={Logo} alt="Brand Logo" />
            </LogoDiv>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <IconsDiv onClick={() => handleIconClick('home')}>
                    {isIconClicked('home') && <IconClicked />}
                    <Icon src={isIconClicked('home') ? HomeClicked : Home} alt="Home Icon" />
                </IconsDiv>
                <IconsDiv onClick={() => handleIconClick('features')}>
                    {isIconClicked('features') && <IconClicked />}
                    <Icon src={isIconClicked('features') ? FeaturesClicked : Features} alt="Features Icon" />
                </IconsDiv>
                <IconsDiv onClick={() => handleIconClick('settings')}>
                    {isIconClicked('settings') && <IconClicked />}
                    <Icon src={isIconClicked('settings') ? SettingsClicked : Settings} alt="Settings Icon" />
                </IconsDiv>
            </div>
            <IconsDiv>
                <Icon src={Notifications} alt="Notifications Icon" />
            </IconsDiv>
        </SidebarDiv>
    );
};

export default Sidebar;
