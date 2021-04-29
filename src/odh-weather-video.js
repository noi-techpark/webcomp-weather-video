import { html, LitElement } from 'lit-element';
import main from './styles/main.css';
import style__placeholder_loading from './styles/placeholder-loading.css';
import style__typography from './styles/typography.css';

class MeteoVideo extends LitElement {
  constructor() {
    super();
    this.language_translation = 'it';
  }
  static get properties() {
    return {
      language_translation: { type: String }
    };
  }

  async firstUpdated() {}

  render() {
    return html`
      <style>
        ${style__placeholder_loading}
        ${main}
        ${style__typography}
      </style>
      <div class="meteo_video_widget">
        <div style="padding:56.25% 0 0 0;position:relative;">
          ${this.language_translation === 'it'
            ? html`
                <!-- IT --><iframe
                  src="https://player.vimeo.com/video/291500549?color=FFFFFF&byline=0"
                  style="position:absolute;top:0;left:0;width:100%;height:100%;"
                  frameborder="0"
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowfullscreen
                ></iframe>
              `
            : html`
                <!-- DE --><iframe
                  src="https://player.vimeo.com/video/291499111?color=FFFFFF&byline=0"
                  style="position:absolute;top:0;left:0;width:100%;height:100%;"
                  frameborder="0"
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowfullscreen
                ></iframe>
              `}
        </div>
      </div>
    `;
  }
}

if (!window.customElements.get('odh-weather-video')) {
  window.customElements.define('odh-weather-video', MeteoVideo);
}
