import React from 'react'
import {Carousel} from 'antd';

import styles from './sectionFeedback.module.scss'
import {ReactComponent as Stars} from '../../assets/stars.svg'

const FeedbackSection = () => {
  return (
    <section className={styles.feedback}>
      <Carousel
        autoplay={true}
        dots={{className: styles.feedbackDots}}
      >
        <div className={styles.feedbackSlide}>
          <blockquote className={styles.blockquote}>
            <Stars/>
            <div className={styles.quoteContent}>
            &ldquo;I am a crazy organizer and had used google
              tasks and other todo lists but I promise this
              is SUPERIOR. I am so happy to have found this.
              In fact this is my first review ever because I
              had to tell everyone how awesome this todolist is.&rdquo;
            </div>

            <cite className={styles.cite}>
              <span
                className={styles.citeAvatar}
                style={{background: '#fd7a4c'}}>SB</span>
              <span className={styles.citeDetails}>
                  Siddharth Bhardwaj
                <span className={styles.devider}>|</span>
                <div>Any.do for Android</div>
              </span>
            </cite>
          </blockquote>

          <blockquote className={styles.blockquote}>
            <Stars/>
            <div className={styles.quoteContent}>
            &ldquo;Its checklist app features are just amazing.
            I just stopped google keep and started to love this one.&rdquo;
            </div>

            <cite className={styles.cite}>
              <span
                className={styles.citeAvatar}
                style={{background: '#ffb900'}}
              >D</span>
              <span className={styles.citeDetails}>
                Djbourbon13
                <span className={styles.devider}>|</span>
                <div>Any.do for iPhone</div>
              </span>
            </cite>
          </blockquote>

          <blockquote className={styles.blockquote}>
            <Stars/>
            <div className={styles.quoteContent}>
            &ldquo;I love the format and simplicity of this tasks list.
            I love how you can simply drag the task not completed to the
            next day. I also like how you can plan your day in the beginning
            by prioritizing each task if you want to. It’s been an awesome
            checklist app!&rdquo;
            </div>

            <cite className={styles.cite}>
              <span
                className={styles.citeAvatar}
                style={{background: '#ff90ad'}}
              >LS</span>
              <span className={styles.citeDetails}>
                Lizza S
                <span className={styles.devider}>|</span>
                <div>Any.do for Android</div>
              </span>
            </cite>
          </blockquote>
        </div>

        <div className={styles.feedbackSlide}>
          <blockquote className={styles.blockquote}>
            <Stars/>
            <div className={styles.quoteContent}>
            This is great for using as a to do list or shopping list.
            I use it every day. I love that you can make categories for
            items. It&lsquo;s simple but powerful and clean looking. Some
            suggestions: The widget is ok, I wish you could customize it
            a little more. You can add items with Siri but you can&lsquo;t
            specify which category to put it in. Also I don&lsquo;t like that
            it automatically sets an alarm for items. But as you can see by my
            five star review,those things dont make this app any less valuable.
            </div>

            <cite className={styles.cite}>
              <span
                className={styles.citeAvatar}
                style={{background: '#fd7a4c'}}>P</span>
              <span className={styles.citeDetails}>
              Perbear127
                <span className={styles.devider}>|</span>
                <div>Any.do for Android</div>
              </span>
            </cite>
          </blockquote>

          <blockquote className={styles.blockquote}>
            <Stars/>
            <div className={styles.quoteContent}>
              I am a crazy organizer and had used google
              tasks and other todo lists but I promise this
              is SUPERIOR. I am so happy to have found this.
              In fact this is my first review ever because I
              had to tell everyone how awesome this todolist is.
            </div>

            <cite className={styles.cite}>
              <span
                className={styles.citeAvatar}
                style={{background: '#ffb900'}}
              >KB</span>
              <span className={styles.citeDetails}>
                  SkleněnáBrambora
                <span className={styles.devider}>|</span>
                <div>Any.do for Android</div>
              </span>
            </cite>
          </blockquote>

          <blockquote className={styles.blockquote}>
            <Stars/>
            <div className={styles.quoteContent}>
              I am a crazy organizer and had used google
              tasks and other todo lists but I promise this
              is SUPERIOR. I am so happy to have found this.
              In fact this is my first review ever because I
              had to tell everyone how awesome this todolist is.
            </div>

            <cite className={styles.cite}>
              <span
                className={styles.citeAvatar}
                style={{background: '#ff90ad'}}
              >J</span>
              <span className={styles.citeDetails}>
                  Jegedlife
                <span className={styles.devider}>|</span>
                <div>Any.do for Apple</div>
              </span>
            </cite>
          </blockquote>
        </div>

        <div className={styles.feedbackSlide}>
          <blockquote className={styles.blockquote}>
            <Stars/>
            <div className={styles.quoteContent}>
            &ldquo;Best to-do lists app I’ve tried.
            Fantastic todolist tool!&rdquo;
            </div>

            <cite className={styles.cite}>
              <span
                className={styles.citeAvatar}
                style={{background: '#fd7a4c'}}>TS</span>
              <span className={styles.citeDetails}>
                  Tahsin Sabid
                <span className={styles.devider}>|</span>
                <div>Any.do for Android</div>
              </span>
            </cite>
          </blockquote>

          <blockquote className={styles.blockquote}>
            <Stars/>
            <div className={styles.quoteContent}>
            &ldquo;I am a crazy organizer and had used google
              tasks and other todo lists but I promise this
              is SUPERIOR. I am so happy to have found this.
              In fact this is my first review ever because I
              had to tell everyone how awesome this todolist is.&rdquo;
            </div>

            <cite className={styles.cite}>
              <span
                className={styles.citeAvatar}
                style={{background: '#ffb900'}}
              >D</span>
              <span className={styles.citeDetails}>
                Djbourbon13
                <span className={styles.devider}>|</span>
                <div>Any.do for Apple</div>
              </span>
            </cite>
          </blockquote>

          <blockquote className={styles.blockquote}>
            <Stars/>
            <div className={styles.quoteContent}>
            &ldquo;Its checklist app features are just amazing.
            I just stopped google keep and started to love this one.&rdquo;
            </div>

            <cite className={styles.cite}>
              <span
                className={styles.citeAvatar}
                style={{background: '#ff90ad'}}
              >JF</span>
              <span className={styles.citeDetails}>
                John F
                <span className={styles.devider}>|</span>
                <div>Any.do for Apple</div>
              </span>
            </cite>
          </blockquote>
        </div>
      </Carousel>
    </section>
  )
}

export default FeedbackSection
