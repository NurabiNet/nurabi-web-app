import 'bootstrap/dist/css/bootstrap.min.css';
import { Route , Switch , Redirect } from 'react-router-dom'
import NavigationHeader from './components/navigation-header/NavigationHeader';
import Consultants from './pages/consultants/Consultants';
import CourseDetails from './pages/course-details/CourseDetails';
import Courses from './pages/courses/Courses';
import Lesson from './pages/lesson/Lesson';
import Consultant from './pages/consultant/Consultant';

import UserCourses from './pages/UserCourses';
import Register from './pages/register/Register';
import Verify from './pages/verify/Verify';
import UserTrackingSystem from './pages/user-tracking-system/intro/UserTrackingSystem';
import './Apps.css'
import UserDashboard from './pages/user-dashboard/UserDashboard';
import TrackingSystems from './pages/user-tracking-system/tracking-systems/TrackingSystems';
import PersonalityAnalysis from './pages/user-personality-analysis/PersonalityAnalysis';
import BankQuestions from './pages/bank-questions/BankQuestions';
import Login from './pages/login/Login';
import UserBankQuestions from './pages/user-bank-questions/UserBankQuestions';
import UserPersonalityResult from './pages/user-personality-result/UserPersonalityResult';
import PersonalityTest from './pages/personality-test/PersonalityTest';
import PersonalityTestQuestion from './pages/personality-test-question/PersonalityTestQuestion';
import BankQuestionForm from './pages/bank-question-form/BankQuestionForm';
import UserNavigationHeader from './components/user-navigation-header/UserNavigationHeader';
import Initiatives from './pages/initiatives/Initiatives';
import Initiative from './pages/initiative/intro/Initiative';
import ForgetPassword from './pages/forget-password/ForgetPassword';
import UserSessions from './pages/user-sessions/UserSessions';
import UserTrackingSystems from './pages/user-tracking-systems/UserTrackingSystems';
import UserInitiatives from './pages/user-initiatives/UserInitiatives';
import RequestConsultation from './pages/request-consultation/RequestConsultation';
import ShowUserProfile from './pages/show-user-profile/ShowUserProfile';
import ContactUs from './pages/contact-us/ContactUs';
import TermsAndConditions from './pages/terms-and-conditions/TermsAndConditions';
import ShoppingCart from './pages/shopping-cart/ShoppingCart';
import Footer from './components/footer/Footer';
import NavigationHeaderV2 from './components/navigation-header-v2/NavigationHeaderV2';




function App() {
  return (
    <div>
      <div className='d-none'>
      <NavigationHeader />
      </div>
      <NavigationHeaderV2 />
      <UserNavigationHeader />

      <Switch>

        

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/forget-password">
          <ForgetPassword />
        </Route>
        
        <Route path="/verify">
          <Verify />
        </Route>

        <Route path="/contact-us" exact>
          <ContactUs />
        </Route>

        <Route path="/terms-and-conditions" exact>
          <TermsAndConditions />
        </Route>

        <Route path="/" exact>
          <Redirect to="/courses" />
        </Route>

        <Route path="/courses" exact>
          <Courses />
        </Route>

        <Route path="/courses/:id">
          <CourseDetails />
        </Route>

        <Route path="/lesson/:id">
          <Lesson />
        </Route>

        <Route path="/user/courses" exact>
          <UserCourses />
        </Route>

        <Route path="/consultants" exact>
          <Consultants />
        </Route>

        <Route path="/consultants/:id">
          <Consultant />
        </Route>

        

        <Route path="/user/dashboard" exact>
          <UserDashboard />
        </Route>

        <Route path="/user/tracking-systems" exact>
          <TrackingSystems />
        </Route>

        <Route path="/user/tracking-system" exact>
          <UserTrackingSystems />
        </Route>

        <Route path="/user/personality-analysis" exact>
          <PersonalityAnalysis />
        </Route>

        <Route path="/bank-questions" exact>
          <BankQuestions />
        </Route>

        <Route path="/bank-question/form" exact>
          <BankQuestionForm />
        </Route>


        <Route path="/user/tracking-system/intro" exact>
          <UserTrackingSystem />
        </Route>

        <Route path="/my/bankQuestions">
          <UserBankQuestions />
        </Route>

        <Route path="/user/personality/result" exact>
          <UserPersonalityResult />
        </Route>

        <Route path="/persinality/test" exact>
          <PersonalityTest />
        </Route>

        <Route path="/persinality/test/question" exact>
          <PersonalityTestQuestion />
        </Route>

        <Route path="/initiatives" exact>
          <Initiatives />
        </Route>

        <Route path="/initiative/intro" exact>
          <Initiative />
        </Route>

        <Route path="/user/sessions" exact>
          <UserSessions />
        </Route>

        <Route path="/user/initiatives" exact>
          <UserInitiatives />
        </Route>

        <Route path="/user/consultation/request" exact>
          <RequestConsultation />
        </Route>

        <Route path="/show/user/profile" exact>
          <ShowUserProfile />
        </Route>

        <Route path="/cart" exact>
          <ShoppingCart />
        </Route>
        
      </Switch>

      <Footer />
      
    </div>
  );
}

export default App;
