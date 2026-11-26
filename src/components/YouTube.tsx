import Image from 'next/image'
import { Bot, Gamepad2, Network } from 'lucide-react'

const CHANNEL_ID = 'UChmPcnMpyJaoGBXoHJPqkPw'
const CHANNEL_URL = 'https://www.youtube.com/@technologicalaman'
const SUBSCRIBE_URL = `${CHANNEL_URL}?sub_confirmation=1`

type Video = { id: string; title: string }

const topics = [
  { label: 'System Design', Icon: Network },
  { label: 'AI Engineering', Icon: Bot },
  { label: 'Full-Stack & Games', Icon: Gamepad2 },
]

function decodeEntities(text: string) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

// Pulls the latest uploads from the channel's public RSS feed at build time.
// No API key needed. If the feed can't be reached, the section still renders
// without the video cards.
async function getLatestVideos(limit = 3): Promise<Video[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
    )
    if (!res.ok) return []
    const xml = await res.text()
    return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
      .slice(0, limit)
      .map(([, entry]) => ({
        id: entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] ?? '',
        title: decodeEntities(entry.match(/<title>([^<]+)<\/title>/)?.[1] ?? ''),
      }))
      .filter((video) => video.id)
  } catch {
    return []
  }
}

function YouTubeLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"
      />
    </svg>
  )
}

export default async function YouTube() {
  const videos = await getLatestVideos()

  return (
    <section id="youtube" className="yt" aria-labelledby="yt-title">
      <span className="yt__glow yt__glow--violet" aria-hidden="true" />
      <span className="yt__glow yt__glow--red" aria-hidden="true" />

      <div className="main-container">
        <div className="yt__grid">
          <div className="yt__copy">
            <span className="yt__eyebrow">
              <span className="yt__live" aria-hidden="true" />
              On YouTube · @technologicalaman
            </span>

            <h2 id="yt-title" className="yt__title">
              I break down how tech <span className="yt__script">actually</span> works.
            </h2>

            <p className="yt__sub">
              Short, sharp explainers on the engineering behind the apps you use every
              day, from a software engineer who builds them.
            </p>

            <ul className="yt__topics" aria-label="Channel topics">
              {topics.map(({ label, Icon }) => (
                <li key={label} className="yt__topic">
                  <Icon aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>

            <div className="yt__ctas">
              <a
                href={SUBSCRIBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="yt__btn yt__btn--sub"
              >
                <YouTubeLogo className="yt__btn-icon" />
                Subscribe
              </a>
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="yt__btn yt__btn--ghost"
              >
                Visit channel <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="yt__stage">
            {videos.length > 0 ? (
              videos.map((video, i) => (
                <a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`yt__card yt__card--${i}`}
                  aria-label={`Watch "${video.title}" on YouTube`}
                >
                  <Image
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt=""
                    fill
                    sizes="220px"
                    className="yt__thumb"
                  />
                  <span className="yt__shade" aria-hidden="true" />
                  <span className="yt__badge" aria-hidden="true">
                    <YouTubeLogo className="yt__badge-icon" />
                    {i === 0 ? 'Latest' : 'Watch'}
                  </span>
                  <span className="yt__play" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="yt__caption">{video.title}</span>
                </a>
              ))
            ) : (
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="yt__card yt__card--0 yt__card--fallback"
                aria-label="Open the YouTube channel"
              >
                <YouTubeLogo className="yt__fallback-logo" />
                <span className="yt__fallback-handle">@technologicalaman</span>
                <span className="yt__fallback-cta">Watch the latest videos</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
