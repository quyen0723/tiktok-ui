import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/8e1f7fff9edf061fd33060d480b3d97a.jpeg?lk3s=a5d48078&nonce=42825&refresh_token=cf358819c7e814fab9d83cac5113d0d0&x-expires=1735264800&x-signature=2%2B%2B0cZhKF9KIdpx4xIIM1HGpygQ%3D&shp=a5d48078&shcp=81f88b70"
                alt="Quiniu"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
