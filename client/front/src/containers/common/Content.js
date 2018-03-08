import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Slider from '../common/Slider';
import HomeContainer from '../home';
import BlogContainer from '../blog';

class Content extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomeContainer} />
                <Route path='/blog/1' component={BlogContainer} />
            </Switch>
        );
    }
}

export default Content;