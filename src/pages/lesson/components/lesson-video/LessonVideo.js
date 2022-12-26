import './LessonVideo.css'
import posterImg from './poster.jpg'
const LessonVideo = () => {
    return (
        <div>
            <video controls poster={posterImg}>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.ogg" type="video/ogg" />
                Your browser does not support HTML5 video.
            </video>
        </div>
    )
}

export default LessonVideo