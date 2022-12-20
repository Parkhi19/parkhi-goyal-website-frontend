export default class PersonalInfo
{
    name;
    id;
    photoUrl;
    aboutHome;

    constructor(name, id, photoUrl, aboutHome) {
        this.name = name;
        this.id = id;
        this.photoUrl = photoUrl;
        this.aboutHome = aboutHome;
    }

    static default() {
        return new PersonalInfo(
            "Parkhi",
            '0ipougyfx',
            'httpshkj',
            ''
        )
    }
}