import React from "react";

import ReactCardCarousel from "react-card-carousel";
import "./Doctrine.css";

const Doctrine = () => {
  const coreBeliefs = [
    "1. The Trinity",
    "2. The full deity and humanity of Christ",
    "3. The spiritual lostness of the human race",
    "4. The substitutionary atonement and bodily resurrection  of Christ",
    "5. Salvation by faith alone in Christ alone",
    "6. The physical return of Christ",
    "7. The authority and inerrancy of Scripture",
  ];

  return (
    <div>
      <div className="titleImageContainer">
        <h1>TCBC DOCTRINAL STATEMENT</h1>
      </div>
      <div className="coreBeliefsContainer" data-aos="fade-up">
        <h3>CORE BELIEFS</h3>
        <div className="mobileCoreBeliefsCard" data-aos="fade-up">
          <p>
            {coreBeliefs.map((x, _) => (
              <div>
                {x} <br />
              </div>
            ))}
          </p>
        </div>
        <div className="carouselContainer">
          <ReactCardCarousel autoplay={true} autoplay_speed={5000}>
            {coreBeliefs.map((x, _) => (
              <div className="coreBeliefsCard">{x}</div>
            ))}
          </ReactCardCarousel>
        </div>
      </div>
      <div className="fullDoctrineContainer">
        <h3 data-aos="fade-up">FULL DOCTRINAL STATEMENT</h3>
        <div className="fullDoctrineBody">
          <h4 data-aos="fade-up">Article I—THE SCRIPTURES</h4>
          <p data-aos="fade-up">
            We believe that "all Scripture is given by inspiration of God,” by
            which we understand the whole Bible is inspired in the sense that
            holy men of God “were moved by the Holy Spirit” to write the very
            words of Scripture. We believe that this divine inspiration extends
            equally and fully to all parts of the writings—historical, poetical,
            doctrinal, and prophetical—as appeared in the original manuscripts.
            We believe that the whole Bible in the originals is therefore
            without error. We believe that all the Scriptures center about the
            Lord Jesus Christ in His person and work in His first and second
            coming, and hence that no portion, even of the Old Testament, is
            properly read, or understood, until it leads to Him. We also believe
            that all the Scriptures were designed for our practical instruction
            (Mark 12:26, 36; 13:11; Luke 24:27, 44; John 5:39; Acts 1:16;
            17:2–3; 18:28; 26:22–23; 28:23; Rom. 15:4; 1 Cor. 2:13; 10:11; 2
            Tim. 3:16; 2 Pet. 1:21).
          </p>

          <h4 data-aos="fade-up">Article II—THE GODHEAD</h4>
          <p data-aos="fade-up">
            We believe that the Godhead eternally exists in three persons—the
            Father, the Son, and the Holy Spirit—and that these three are one
            God, having precisely the same nature, attributes, and perfections,
            and worthy of precisely the same homage, confidence, and obedience
            (Matt. 28:18–19; Mark 12:29; John 1:14; Acts 5:3–4; 2 Cor. 13:14;
            Heb. 1:1–3; Rev. 1:4–6).
          </p>

          <h4 data-aos="fade-up">Article III—ANGELS, FALLEN AND UNFALLEN</h4>
          <p data-aos="fade-up">
            We believe that God created an innumerable company of sinless,
            spiritual beings, known as angels; that one, “Lucifer, son of the
            morning”—the highest in rank—sinned through pride, thereby becoming
            Satan; that a great company of the angels followed him in his moral
            fall, some of whom became demons and are active as his agents and
            associates in the prosecution of his unholy purposes, while others
            who fell are “reserved in everlasting chains under darkness unto the
            judgment of the great day” (Isa. 14:12–17; Ezek. 28:11–19; 1 Tim.
            3:6; 2 Pet. 2:4; Jude 6).
          </p>
          <p data-aos="fade-up">
            We believe that Satan is the originator of sin, and that, under the
            permission of God, he, through subtlety, led our first parents into
            transgression, thereby accomplishing their moral fall and subjecting
            them and their posterity to his own power; that he is the enemy of
            God and the people of God, opposing and exalting himself above all
            that is called God or that is worshiped; and that he who in the
            beginning said, “I will be like the most High,” in his warfare
            appears as an angel of light, even counterfeiting the works of God
            by fostering religious movements and systems of doctrine, which
            systems in every case are characterized by a denial of the efficacy
            of the blood of Christ and of salvation by grace alone (Gen. 3:1–19;
            Rom. 5:12–14; 2 Cor. 4:3–4; 11:13–15; Eph. 6:10–12; 2 Thess. 2:4; 1
            Tim. 4:1–3). We believe that Satan was judged at the Cross, though
            not then executed, and that he, a usurper, now rules as the “god of
            this world”; that, at the second coming of Christ, Satan will be
            bound and cast into the abyss for a thousand years, and after the
            thousand years he will be loosed for a little season and then “cast
            into the lake of fire and brimstone,” where he “shall be tormented
            day and night for ever and ever” (Col. 2:15; Rev. 20:1–3, 10). We
            believe that a great company of angels kept their holy estate and
            are before the throne of God, from whence they are sent forth as
            ministering spirits to minister for them who shall be heirs of
            salvation (Luke 15:10; Eph. 1:21; Heb. 1:14; Rev. 7:12). We believe
            that man was made lower than the angels; and that, in His
            incarnation, Christ took for a little time this lower place that He
            might lift the believer to His own sphere above the angels (Heb.
            2:6–10).
          </p>

          <h4 data-aos="fade-up">Article IV—MAN, CREATED AND FALLEN</h4>
          <p data-aos="fade-up">
            We believe that man was originally created in the image and after
            the likeness of God, and that he fell through sin, and, as a
            consequence of his sin, lost his spiritual life, becoming dead in
            trespasses and sins, and that he became subject to the power of the
            devil. We also believe that this spiritual death, or total depravity
            of human nature, has been transmitted to the entire human race of
            man, the Man Christ Jesus alone being excepted; and hence that every
            child of Adam is born into the world with a nature which not only
            possesses no spark of divine life, but is essentially and
            unchangeably bad apart from divine grace (Gen. 1:26; 2:17; 6:5; Pss.
            14:1–3; 51:5; Jer. 17:9; John 3:6; 5:40; 6:35; Rom. 3:10–19; 8:6–7;
            Eph. 2:1–3; 1 Tim. 5:6; 1 John 3:8).
          </p>
          <h4 data-aos="fade-up">Article V—THE DISPENSATIONS</h4>
          <p data-aos="fade-up">
            We believe that the dispensations are stewardships by which God
            administers His purpose on the earth through man under varying
            responsibilities. We believe that the changes in the dispensational
            dealings of God with man depend on changed conditions or situations
            in which man is successively found with relation to God, and that
            these changes are the result of the failures of man and the
            judgments of God. We believe that different administrative
            responsibilities of this character are manifest in the biblical
            record, that they span the entire history of mankind, and that each
            ends in the failure of man under the respective test and in an
            ensuing judgment from God. We believe that three of these
            dispensations or rules of life are the subject of extended
            revelation in the Scriptures, viz., the dispensation of the Mosaic
            Law, the present dispensation of grace, and the future dispensation
            of the millennial kingdom. We believe that these are distinct and
            are not to be intermingled or confused, as they are chronologically
            successive.
          </p>
          <p data-aos="fade-up">
            We believe that the dispensations are not ways of salvation nor
            different methods of administering the so-called Covenant of Grace.
            They are not in themselves dependent on covenant relationships but
            are ways of life and responsibility to God which test the submission
            of man to His revealed will during a particular time. We believe
            that if man does trust in his own efforts to gain the favor of God
            or salvation under any dispensational test, because of inherent sin
            his failure to satisfy fully the just requirements of God is
            inevitable and his condemnation sure.
          </p>
          <p data-aos="fade-up">
            We believe that according to the “eternal purpose” of God (Eph.
            3:11) salvation in the divine reckoning is always “by grace through
            faith,” and rests upon the basis of the shed blood of Christ. We
            believe that God has always been gracious, regardless of the ruling
            dispensation, but that man has not at all times been under an
            administration or stewardship of grace as is true in the present
            dispensation (1 Cor. 9:17; Eph. 3:2; 3:9, asv; Col. 1:25; 1 Tim.
            1:4, asv).
          </p>
          <p data-aos="fade-up">
            We believe that it has always been true that “without faith it is
            impossible to please” God (Heb. 11:6), and that the principle of
            faith was prevalent in the lives of all the Old Testament saints.
            However, we believe that it was historically impossible that they
            should have had as the conscious object of their faith the
            incarnate, crucified Son, the Lamb of God (John 1:29), and that it
            is evident that they did not comprehend as we do that the sacrifices
            depicted the person and work of Christ. We believe also that they
            did not understand the redemptive significance of the prophecies or
            types concerning the sufferings of Christ (1 Pet. 1:10–12);
            therefore, we believe that their faith toward God was manifested in
            other ways as is shown by the long record in Hebrews 11:1–40. We
            believe further that their faith thus manifested was counted unto
            them for righteousness (cf. Rom. 4:3 with Gen. 15:6; Rom. 4:5–8;
            Heb. 11:7).
          </p>

          <h4 data-aos="fade-up">Article VI—THE FIRST ADVENT</h4>
          <p data-aos="fade-up">
            We believe that, as provided and purposed by God and as preannounced
            in the prophecies of the Scriptures, the eternal Son of God came
            into this world that He might manifest God to men, fulfill prophecy,
            and become the Redeemer of a lost world. To this end He was born of
            the virgin, and received a human body and a sinless human nature
            (Luke 1:30–35; John 1:18; 3:16; Heb. 4:15).
          </p>
          <p data-aos="fade-up">
            We believe that, on the human side, He became and remained a perfect
            man, but sinless throughout His life; yet He retained His absolute
            deity, being at the same time very God and very man, and that His
            earth-life sometimes functioned within the sphere of that which was
            human and sometimes within the sphere of that which was divine (Luke
            2:40; John 1:1–2; Phil. 2:5–8).
          </p>
          <p data-aos="fade-up">
            We believe that in fulfillment of prophecy He came first to Israel
            as her Messiah-King, and that, being rejected of that nation, He,
            according to the eternal counsels of God, gave His life as a ransom
            for all (John 1:11; Acts 2:22–24; 1 Tim. 2:6).
          </p>
          <p data-aos="fade-up">
            We believe that, in infinite love for the lost, He voluntarily
            accepted His Father’s will and became the divinely provided
            sacrificial Lamb and took away the sin of the world, bearing the
            holy judgments against sin which the righteousness of God must
            impose. His death was therefore substitutionary in the most absolute
            sense—the just for the unjust—and by His death He became the Savior
            of the lost (John 1:29; Rom. 3:25–26; 2 Cor. 5:14; Heb. 10:5–14; 1
            Pet. 3:18).
          </p>
          <p data-aos="fade-up">
            We believe that, according to the Scriptures, He arose from the dead
            in the same body, though glorified, in which He had lived and died,
            and that His resurrection body is the pattern of that body which
            ultimately will be given to all believers (John 20:20; Phil.
            3:20–21).
          </p>
          <p data-aos="fade-up">
            We believe that, on departing from the earth, He was accepted of His
            Father and that His acceptance is a final assurance to us that His
            redeeming work was perfectly accomplished (Heb. 1:3).
          </p>
          <p data-aos="fade-up">
            We believe that He became Head over all things to the church which
            is His body, and in this ministry He ceases not to intercede and
            advocate for the saved (Eph. 1:22–23; Heb. 7:25; 1 John 2:1).
          </p>
        </div>
        <h4 className="doctrineDisclaimer" data-aos="fade-up">
          <i>
            This doctrinal statement is taken from Dallas theological seminary
            and used with their permission.
          </i>
        </h4>
      </div>
    </div>
  );
};

export default Doctrine;
