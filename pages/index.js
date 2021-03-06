import Link from 'next/link'
import Head from 'next/head'
import { hello } from '~/core'
import classNames from 'classnames'
import {Grid, Image, Tab, Container, Segment, Item, Button, Input} from 'semantic-ui-react'
 
const userData = [
  {
    id: '1ba80d98-673b-484c-93a9-00c71ef64538',
    created_at: '2017-08-28T12:22:31.806Z',
    updated_at: '2017-09-14T14:09:01.875Z',
    email: 'jjfraz11@gmail.com',
    email_verified: true,
    nickname: 'jjfraz11',
    chatname: 'fraze',
    given_name: 'Jonathan',
    family_name: 'Frazier',
    picture: 'https://lh3.googleusercontent.com/-EYi_ZUytEQY/AAAAAAAAAAI/AAAAAAAAANs/dDz-YqupIvA/photo.jpg',
    gender: 'male',
    locale: 'en',
    sub: 'google-oauth2|118155937302787181162'
  }
]

const bidData = [
  {
    'id': '',
    'created_at': '',
    'updated_at': '',
    'subject_id': '',
    'subject_type': 'User',
    'price': '',
    'min_duration': '',
    'max_duration': '',
    'message': '',
    'minprice': 'Price/min',
    'time': 'Last message sent at',
    'text': 'Message Preview Text...',
    'read': 'true'
  },
  {
    'minprice': 'Price/min',
    'time': 'Last message sent at',
    'text': 'Message Preview Text...',
    'read': 'false'
  },
  {
    'minprice': 'Price/min',
    'time': 'Last message sent at',
    'text': 'Message Preview Text...',
    'read': 'true'
  },
  {
    'minprice': 'Price/min',
    'time': 'Last message sent at',
    'text': 'Message Preview Text...',
    'read': 'true'
  },
  {
    'minprice': 'Price/min',
    'time': 'Last message sent at',
    'text': 'Message Preview Text...',
    'read': 'true'
  },
  {
    'minprice': 'Price/min',
    'time': 'Last message sent at',
    'text': 'Message Preview Text...',
    'read': 'true'
  }
]

const chatData = [
  {
    'id': '',
    'created_at': '',
    'updated_at': '',
    'user_one_id': '',
    'user_two_id': '',
    'subject_id': '',
    'subject_type':'',
    'avatar': '',
    'username': '',
    'role': 'Sender',
    'time': 'Sent At Timestamp',
    'text': 'Message Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    'avatar': '',
    'username': '',
    'role': 'Recipient',
    'time': 'Sent At Timestamp',
    'text': 'Message Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    'avatar': '',
    'username': '',
    'role': 'Sender',
    'time': 'Sent At Timestamp',
    'text': 'Message Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    'avatar': '',
    'username': '',
    'role': 'Recipient',
    'time': 'Sent At Timestamp',
    'text': 'Message Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    'avatar': '',
    'username': '',
    'role': 'Recipient',
    'time': 'Sent At Timestamp',
    'text': 'Message Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    'avatar': '',
    'username': '',
    'role': 'Sender',
    'time': 'Sent At Timestamp',
    'text': 'Message Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    }

    this.selectHandler = this.selectHandler.bind(this)
  }

  panes = [
    { menuItem: 'OPEN BIDS', 
      render: () => 
        <Tab.Pane>
          <pre style={{ height: 800, overflowY: 'scroll', overflowX: 'hidden', whiteSpace: 'pre-wrap'}}>
            {bidData.map((data, index) =>
            <div key={index} onClick={() => this.selectHandler(index)} className={this.state.activeIndex == index ? 'active-border heading' : 'heading'}>
              <Segment inverted={data.read == 'false'} color={data.read == 'false' ? 'grey':''}>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={4}>
                      <Image centered src='static/default.jpeg' size='tiny' />
                      <p className='username'>{data.username}</p>
                    </Grid.Column>
                    <Grid.Column width={12}>
                      <Grid.Row>
                        <span className='price'><b>{data.minprice}</b></span>
                        <span className='date'>{data.time}</span>                    
                      </Grid.Row>
                      <Grid.Row>
                        <p className='bidText'>{data.text}</p>
                      </Grid.Row>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
              </div>
            )}
          </pre>
        </Tab.Pane> 
    },
    { 
      menuItem: 'CLOSED BIDS', 
      render: () => 
        <Tab.Pane>
          <pre style={{ height: 800, overflowY: 'scroll', overflowX: 'hidden', whiteSpace: 'pre-wrap'}}>
            {bidData.map((data, index) =>
              <Segment>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={4}>
                      <Image centered src='static/default.jpeg' size='small' />
                      <p className='username'>Username</p>
                    </Grid.Column>
                    <Grid.Column width={12}>
                      <Grid.Row>
                        <span className='price'><b>{data.minprice}</b></span>
                        <span className='date'>{data.time}</span>
                      </Grid.Row>
                      <Grid.Row>
                        <p className='bidText'>{data.text}</p>
                      </Grid.Row>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment> 
            )}
          </pre>
        </Tab.Pane>
    } ,
  ]


  selectHandler(index) {
    
    this.setState({activeIndex: index})
  }

  render() {
    return (
      <div>
        <Head>
          <title>My mockup page</title>
          <link href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="static/style.css"/>
        </Head>
        <Container fluid>
          <Grid>
            <Grid.Row>
              <Grid.Column width={6}>
                <Segment>        
                  <Tab panes={this.panes}/>
                </Segment>
              </Grid.Column>
              <Grid.Column width={10}>
                <Segment.Group>
                  <Segment>
                    <pre style={{ height: 755, overflowY: 'scroll', overflowX: 'hidden', whiteSpace: 'pre-wrap'}}>
                      {chatData.map((data, index) => 
                        data.role == 'Sender'?
                        <Segment className='segment-sender'>                
                          <Image src='static/default.jpeg' size='mini' inline />
                          <span className='role'><b>Sender</b><span className='date'>{data.time}</span></span>
                          <Segment>
                            <div className="text">{data.text}</div>
                          </Segment>
                        </Segment>
                        :
                        <div className='segment-recipient'>
                          <Segment>                  
                            <span className='time'>{data.time}</span>
                            <div className='recipient'>
                              <span><b className='role'>Recipient</b></span>
                              <Image src='static/default.jpeg' size='mini' inline />
                            </div>            
                            <Segment>
                              <div className="text">{data.text}</div>
                            </Segment>
                          </Segment>
                        </div>
                      )}
                    </pre>
                  </Segment>
                  <Segment>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={4}>
                          <div className='username'>
                            <p className='bid-price'><b>Current Bid Price</b></p>
                            <Grid>
                              <Grid.Row>
                                <Grid.Column width={8}>
                                  <Button content='ACCEPT' className='btn-button'/>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                <Button content='DECLINE' className='btn-button'/>
                                </Grid.Column>
                              </Grid.Row>                        
                            </Grid>
                          </div>
                        </Grid.Column>
                        <Grid.Column width={12}>
                          <div className='group'>
                            <Grid>
                              <Grid.Row>
                                <Grid.Column width={12}>
                                  <Input placeholder='Enter Text' className='enter-text' size='huge' />                        
                                </Grid.Column>
                                <Grid.Column width={4}>
                                  <Button content='SEND' size='huge'  className='btn-button' />
                                </Grid.Column>
                              </Grid.Row>
                            </Grid>
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                </Segment.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default App
  