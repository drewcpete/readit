import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import Post from './Post';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            masterPostList: [],
            count: 0
        };
        this.handleAddingPostToList = this.handleAddingPostToList.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement() {
        let newCount = this.state.count +1;
        this.setState({
            count: newCount
        })
    }

    handleAddingPostToList(newPost) {
        var newMasterPostList = this.state.masterPostList.slice();
        newMasterPostList.push(newPost);
        this.setState({ masterPostList: newMasterPostList});
    }

    render(){
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' render={() => <PostList postList={this.state.masterPostList}/>}/>
                    <Route path='/newpost' render={() => <NewPostForm onNewPostCreation={this.handleAddingPostToList}/>}/>
                </Switch>
                <button onClick={this.handleIncrement}>Likes: {this.state.count} </button>

            </div>
        );
    }
}

export default App;