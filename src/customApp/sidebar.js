import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/uielements/menu';
import IntlMessages from '../components/utility/intlMessages';
import { sidebar } from '../components/algolia';

const SubMenu = Menu.SubMenu;


export default function (url, submenuColor) {
  const sidebars = [];

  sidebars.push(
    <Menu.Item key="githubSearch">
      <Link to={`${url}/githubSearch`}>
        <span className="isoMenuHolder" style={submenuColor}>
          <i className="ion-social-github" />
          <span className="nav-text">
            <IntlMessages id="Quản lý tòa nhà" />
          </span>
        </span>
      </Link>
    </Menu.Item>
  )
  sidebars.push(
    <Menu.Item key="calendar">
      <Link to={`${url}/calendar`}>
        <span className="isoMenuHolder" style={submenuColor}>
          <i className="ion-calendar" />
          <span className="nav-text">
            <IntlMessages id="sidebar.calendar" />
          </span>
        </span>
      </Link>
    </Menu.Item>
  )
  sidebars.push(
    <Menu.Item key="githubSearch">
      <Link to={`${url}/githubSearch`}>
        <span className="isoMenuHolder" style={submenuColor}>
          <i className="ion-social-github" />
          <span className="nav-text">
            <IntlMessages id="sidebar.githubSearch" />
          </span>
        </span>
      </Link>
    </Menu.Item>
  );



  sidebars.push(
    <Menu.Item key="blank_page">
      <Link to={`${url}/blank_page`}>
        <span className="isoMenuHolder" style={submenuColor}>
          <i className="ion-document" />
          <span className="nav-text">
            <IntlMessages id="sidebar.blankPage" />
          </span>
        </span>
      </Link>
    </Menu.Item>
  );
  return sidebars;
}
