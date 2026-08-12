# Real Eventoss images to download

Run this from your project root (creates public/images/ automatically).
Every URL below is a real image from eventoss.in — nothing stock/fake.

## 1. Core theme images (used across About / Services / Work / Homepage)

| Save as | Source URL |
|---|---|
| public/images/eventoss-hero-stage.jpg | https://www.eventoss.in/wp-content/themes/event-theme/assets/preset-images/bg-john-kraus-2.jpg |
| public/images/eventoss-about.jpeg | https://www.eventoss.in/wp-content/uploads/about-us.jpeg |
| public/images/eventoss-team-crowd.jpg | https://www.eventoss.in/wp-content/uploads/24173672_1498064193576894_2730491452560835488_o-1.jpg |
| public/images/eventoss-detail-coffee.jpg | https://www.eventoss.in/wp-content/uploads/2017/07/bg-pexels-coffee-coffee-machine-cup-3042.jpg |

## 2. Blog cover images (18 real event photos — genuine variety, not stock)

| Save as | Source URL |
|---|---|
| public/images/blog/01-authentic-humanized-content.jpeg | https://www.eventoss.in/wp-content/uploads/about-us.jpeg |
| public/images/blog/02-seo-sem.jpeg | https://eventoss.in/blog/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-09-at-11.58.27-AM-768x297.jpeg |
| public/images/blog/03-womens-day-2022.png | https://eventoss.in/blog/wp-content/uploads/2022/03/image-3-768x422.png |
| public/images/blog/04-post-covid-events.jpg | https://eventoss.in/blog/wp-content/uploads/2021/11/doctor-mask-gloves-protective-suit-pointing-left-looking_176474-3604.jpg |
| public/images/blog/05-social-media-strategies.jpeg | https://eventoss.in/blog/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-27-at-12.27.23-PM-768x384.jpeg |
| public/images/blog/06-crisis-communication.png | https://eventoss.in/blog/wp-content/uploads/2021/09/344-768x369.png |
| public/images/blog/07-social-media-small-business.jpeg | https://eventoss.in/blog/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-12-at-1.57.08-PM-768x384.jpeg |
| public/images/blog/08-marketing-leverage.jpeg | https://eventoss.in/blog/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-16-at-11.03.00-AM-768x384.jpeg |
| public/images/blog/09-11-years-anniversary.jpeg | https://eventoss.in/blog/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-13-at-4.08.15-PM-768x576.jpeg |
| public/images/blog/10-pr-vs-advertising.png | https://eventoss.in/blog/wp-content/uploads/2021/06/pr-eventoss-blog.png |
| public/images/blog/11-virtual-world.jpeg | https://eventoss.in/blog/wp-content/uploads/2021/06/zoom-meeting-image-14-june-2021.jpeg |
| public/images/blog/12-away-from-chaos.jpg | https://eventoss.in/blog/wp-content/uploads/2021/03/Statesman-1-1024x679-1-768x509.jpg |
| public/images/blog/13-christmas-merry-spirit.jpg | https://eventoss.in/blog/wp-content/uploads/2021/03/133356156_5589384011087890_7797665351616476224_o-1-1024x683-1-768x512.jpg |
| public/images/blog/14-53-open-court.jpg | https://eventoss.in/blog/wp-content/uploads/2021/03/Edited-Venue4-1-1024x678-1-768x509.jpg |
| public/images/blog/15-pr-myths.jpg | https://eventoss.in/blog/wp-content/uploads/2021/03/Myths-1-768x277.jpg |
| public/images/blog/16-corporate-events-promotions.png | https://eventoss.in/blog/wp-content/uploads/2020/11/31.png |
| public/images/blog/17-plan-your-event.jpg | https://eventoss.in/blog/wp-content/uploads/2020/11/21-768x508.jpg |
| public/images/blog/18-wedding-vogues.jpg | https://eventoss.in/blog/wp-content/uploads/2020/11/11-768x512.jpg |

## Quick download script (run in project root, requires curl)

```bash
mkdir -p public/images/blog

curl -L -o public/images/eventoss-hero-stage.jpg "https://www.eventoss.in/wp-content/themes/event-theme/assets/preset-images/bg-john-kraus-2.jpg"
curl -L -o public/images/eventoss-about.jpeg "https://www.eventoss.in/wp-content/uploads/about-us.jpeg"
curl -L -o public/images/eventoss-team-crowd.jpg "https://www.eventoss.in/wp-content/uploads/24173672_1498064193576894_2730491452560835488_o-1.jpg"
curl -L -o public/images/eventoss-detail-coffee.jpg "https://www.eventoss.in/wp-content/uploads/2017/07/bg-pexels-coffee-coffee-machine-cup-3042.jpg"

curl -L -o public/images/blog/01-authentic-humanized-content.jpeg "https://www.eventoss.in/wp-content/uploads/about-us.jpeg"
curl -L -o public/images/blog/02-seo-sem.jpeg "https://eventoss.in/blog/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-09-at-11.58.27-AM-768x297.jpeg"
curl -L -o public/images/blog/03-womens-day-2022.png "https://eventoss.in/blog/wp-content/uploads/2022/03/image-3-768x422.png"
curl -L -o public/images/blog/04-post-covid-events.jpg "https://eventoss.in/blog/wp-content/uploads/2021/11/doctor-mask-gloves-protective-suit-pointing-left-looking_176474-3604.jpg"
curl -L -o public/images/blog/05-social-media-strategies.jpeg "https://eventoss.in/blog/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-27-at-12.27.23-PM-768x384.jpeg"
curl -L -o public/images/blog/06-crisis-communication.png "https://eventoss.in/blog/wp-content/uploads/2021/09/344-768x369.png"
curl -L -o public/images/blog/07-social-media-small-business.jpeg "https://eventoss.in/blog/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-12-at-1.57.08-PM-768x384.jpeg"
curl -L -o public/images/blog/08-marketing-leverage.jpeg "https://eventoss.in/blog/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-16-at-11.03.00-AM-768x384.jpeg"
curl -L -o public/images/blog/09-11-years-anniversary.jpeg "https://eventoss.in/blog/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-13-at-4.08.15-PM-768x576.jpeg"
curl -L -o public/images/blog/10-pr-vs-advertising.png "https://eventoss.in/blog/wp-content/uploads/2021/06/pr-eventoss-blog.png"
curl -L -o public/images/blog/11-virtual-world.jpeg "https://eventoss.in/blog/wp-content/uploads/2021/06/zoom-meeting-image-14-june-2021.jpeg"
curl -L -o public/images/blog/12-away-from-chaos.jpg "https://eventoss.in/blog/wp-content/uploads/2021/03/Statesman-1-1024x679-1-768x509.jpg"
curl -L -o public/images/blog/13-christmas-merry-spirit.jpg "https://eventoss.in/blog/wp-content/uploads/2021/03/133356156_5589384011087890_7797665351616476224_o-1-1024x683-1-768x512.jpg"
curl -L -o public/images/blog/14-53-open-court.jpg "https://eventoss.in/blog/wp-content/uploads/2021/03/Edited-Venue4-1-1024x678-1-768x509.jpg"
curl -L -o public/images/blog/15-pr-myths.jpg "https://eventoss.in/blog/wp-content/uploads/2021/03/Myths-1-768x277.jpg"
curl -L -o public/images/blog/16-corporate-events-promotions.png "https://eventoss.in/blog/wp-content/uploads/2020/11/31.png"
curl -L -o public/images/blog/17-plan-your-event.jpg "https://eventoss.in/blog/wp-content/uploads/2020/11/21-768x508.jpg"
curl -L -o public/images/blog/18-wedding-vogues.jpg "https://eventoss.in/blog/wp-content/uploads/2020/11/11-768x512.jpg"

echo "Done. 22 images downloaded into public/images/"
```
