function ProfileCard({ title, handle, imgSrc, description }) {
    return (
        <div className="card">
            <div className="className">
                <figure className="className">
                    <img src={imgSrc} alt="pda logo" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">{description}</div>
            </div>
        </div>
    );
}

export default ProfileCard;
