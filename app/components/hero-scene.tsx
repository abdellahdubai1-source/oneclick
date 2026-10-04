import { ArrowUpRight, Check, Globe, Smartphone } from "lucide-react";

/** Static design concept: decorative, without fabricated results or client claims. */
export default function HeroScene() {
  return (
    <div
      className="oc-scene"
      role="img"
      aria-label="Website design concept showing a clean business website on desktop and mobile"
    >
      <div className="oc-scene-backdrop" aria-hidden="true" />
      <div className="oc-browser" aria-hidden="true">
        <div className="oc-browser-bar">
          <span />
          <span />
          <span />
          <div>
            <Globe size={10} /> yourbusiness.ae
          </div>
          <ArrowUpRight size={12} />
        </div>
        <div className="oc-mock">
          <div className="oc-mock-nav">
            <b>
              <span />
              YOUR BUSINESS
            </b>
            <div>
              About <span>Services</span>
              <i>
                Let’s talk <ArrowUpRight size={8} />
              </i>
            </div>
          </div>
          <div className="oc-mock-hero">
            <div>
              <span className="oc-mock-label">A NEW CHAPTER</span>
              <strong>
                Your next
                <br />
                chapter starts
                <br />
                <em>here.</em>
              </strong>
              <p>
                A clear vision.
                <br />A business ready for what’s next.
              </p>
              <span className="oc-mock-button">
                Discover more <ArrowUpRight size={12} />
              </span>
            </div>
            <div className="oc-mock-art">
              <div className="oc-art-ring" />
              <div className="oc-art-ball" />
              <span>
                Built around
                <br />
                your vision.
              </span>
            </div>
          </div>
          <div className="oc-mock-bottom">
            <span>Thoughtfully designed.</span>
            <span>
              Made to connect. <ArrowUpRight size={10} />
            </span>
          </div>
        </div>
      </div>
      <div className="oc-phone" aria-hidden="true">
        <div className="oc-phone-notch" />
        <div className="oc-phone-content">
          <b>
            <span />
            YOUR BUSINESS
          </b>
          <div className="oc-phone-art" />
          <strong>
            Good business.
            <br />
            <em>Great presence.</em>
          </strong>
          <p>Your next chapter starts here.</p>
          <span className="oc-phone-button">
            Let’s talk <ArrowUpRight size={10} />
          </span>
          <div className="oc-phone-lines">
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="oc-scene-caption" aria-hidden="true">
        <span>
          <Smartphone size={14} />
          Every screen. One clear experience.
        </span>
        <span>
          <Check size={13} />
          Design concept
        </span>
      </div>
    </div>
  );
}
