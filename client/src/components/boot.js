import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import ListGroup from 'react-bootstrap/ListGroup'

function Settinglist() {
    return (
        <ul className="setting-list">            
                        <li>
                            <label className="mb-3"> Recieve newsletters
                                <input className="ml-2" type="checkbox" defaultChecked="True"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label className="mb-2"> Display name on profile
                                <input className="ml-2 mt-1" type="checkbox" defaultChecked="True"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>
                    </ul>
    )
}

function General() {
    return (
        <Container>
            <Row>
                <Col md={5}>
                    <ul className="setting-list">            
                        <li>USERNAME:</li><p>username</p><br/>
                        <li>NAME:</li><p>name</p><br/>
                        <li>EMAIL:</li><p>email</p><br/>
                        <li>BIRTHDAY:</li><p>birthday</p><br/>
                        <li>PASSWORD:</li><p>*******</p>
                    </ul>
                </Col>
                <Col md={{ span: 5, offset: 1 }} className="mt-5">
                    <Settinglist/>
                </Col>
            </Row>
        </Container>
  
    )
}
function Notifs() {
    return (
        <Container>
            <Row>
                <Col md={{ span: 5}}>
                    <Settinglist/>
                </Col>
            </Row>
        </Container>
  
    )
}
function Privacy() {
    return (
        <Container>
            <Row>
                <Col md={{ span: 5}}>
                    <ul className="setting-list">            
                    <li>FORGOT PASSWORD:</li><p>password</p>
                    </ul>
                </Col>
            </Row>
        </Container>
  
    )
}

function Boot () {
    return (
        <Container className="mt-5 pt-5">
            <Row>
                <Col md={4} sm={{ span: 12}}>
                    <h1 id="setting-tile">Account Settings</h1>
                </Col>
                <Col md={3} sm={12}>
                    <div className="acc-preview">
                        <p className="mr-1" id="usr">USERNAME </p>
                        <p className=""> MEMBER SINCE MM/DD/YYYY</p>
                    </div>
                </Col>
                <Col md={{ span: 3, offset:2}} xs={{span: 4, offset:3}} sm={{span: 4, offset:6}}>
                    <div attribution= "Peter Southwood, CC0, via Wikimedia Commons" id="circle"></div>
                </Col>
            </Row>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#general">
                <Row >
                    <Col sm={4} md={3}>
                    <ListGroup variant="flush" className="rounded">
                        <ListGroup.Item action href="#general" className="pb-3">
                        General Settings
                        </ListGroup.Item>
                        <ListGroup.Item action href="#notif" className="pb-3">
                        Notifications
                        </ListGroup.Item>
                        <ListGroup.Item action href="#privacy" className="pb-3 mb-5 border-bottom">
                        Privacy
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col sm={{ span: 7, offset: 1}} className="mt-5 border">
                        <Tab.Content>
                            <Tab.Pane eventKey="#general" className="mt-5">
                                <General/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#notif" className="mt-5">
                                <Notifs id="notif"/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#privacy" className="mt-5">
                                <Privacy id="privacy"/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}
export default Boot