import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'dva/router';
import DocumentTitle from 'react-document-title';
import { Icon } from 'antd';
import GlobalFooter from '../components/GlobalFooter';
import styles from './UserLayout.less';

const links = [{
  title: '有鱼贷客',
  href: 'http://www.youyuxin.com',
  blankTarget: true,
}, {
  title: '点滴贷',
  href: 'http://www.huishuaka.com/d/ds/',
  blankTarget: true,
}, {
  title: '有鱼金融',
  href: 'http://www.youyuwo.com/family.html',
  blankTarget: true,
}]

const copyright = <div>Copyright <Icon type="copyright" /> 2017 贷款开发部出品</div>;

class UserLayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
  }
  getChildContext() {
    const { location } = this.props;
    return { location };
  }
  getPageTitle() {
    const { getRouteData, location } = this.props;
    const { pathname } = location;
    let title = '有鱼贷客-运营后台';
    getRouteData('UserLayout').forEach((item) => {
      if (item.path === pathname) {
        title = `${item.name} - 有鱼贷客-运营后台`;
      }
    });
    return title;
  }
  render() {
    const { getRouteData } = this.props;

    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="" className={styles.logo} src={require('../assets/logo1.png')} />
                <span className={styles.title}>有鱼贷客</span>
              </Link>
            </div>
            <div className={styles.desc}>有鱼贷客 是最具活力的信贷员平台</div>
          </div>
          {
            getRouteData('UserLayout').map(item =>
              (
                <Route
                  exact={item.exact}
                  key={item.path}
                  path={item.path}
                  component={item.component}
                />
              )
            )
          }
          <GlobalFooter className={styles.footer} links={links} copyright={copyright} />
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
