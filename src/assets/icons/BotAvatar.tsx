import React from 'react'

const BotAvatar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox='0 0 51 51'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <circle cx='25.4629' cy='25.3281' r='25' fill='#D9D9D9' />
    <circle cx='25.4629' cy='25.3281' r='25' fill='url(#pattern0_16134_582680)' />
    <defs>
      <pattern id='pattern0_16134_582680' patternContentUnits='objectBoundingBox' width='1' height='1'>
        <use xlinkHref='#image0_16134_582680' transform='translate(0 -0.00206612) scale(0.00413223)' />
      </pattern>
      <image
        id='image0_16134_582680'
        width='242'
        height='243'
        xlinkHref='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QWyRXhpZgAATU0AKgAAAAgABwEOAAIAAACZAAABbgE7AAIAAAAKAAACCIdpAAQAAAABAAACEpybAAEAAAEyAAADMpydAAEAAAAUAAAEZJyfAAEAAAEyAAAEeOocAAcAAAEMAAAAYgAAAAAc6gAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUm9ib3QgaW4gY2lyY2xlIGljb24gc2V0LiBCb3Qgc2lnbiBkZXNpZ24uIENoYXRib3Qgc3ltYm9sLCBsb2dvIHRlbXBsYXRlLiBNb2Rlcm4gZmxhdCBzdHlsZSBjYXJ0b29uIGNoYXJhY3RlciBpbGx1c3RyYXRpb25zIGlzb2xhdGVkIG9uIHdoaXRlIGJhY2tncm91bmQAAGRlbnZpdHJ1awAAAeocAAcAAAEMAAACJAAAAAAc6gAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSAG8AYgBvAHQAIABpAG4AIABjAGkAcgBjAGwAZQAgAGkAYwBvAG4AIABzAGUAdAAuACAAQgBvAHQAIABzAGkAZwBuACAAZABlAHMAaQBnAG4ALgAgAEMAaABhAHQAYgBvAHQAIABzAHkAbQBiAG8AbAAsACAAbABvAGcAbwAgAHQAZQBtAHAAbABhAHQAZQAuACAATQBvAGQAZQByAG4AIABmAGwAYQB0ACAAcwB0AHkAbABlACAAYwBhAHIAdABvAG8AbgAgAGMAaABhAHIAYQBjAHQAZQByACAAaQBsAGwAdQBzAHQAcgBhAHQAaQBvAG4AcwAgAGkAcwBvAGwAYQB0AGUAZAAgAG8AbgAgAHcAaABpAHQAZQAgAGIAYQBjAGsAZwByAG8AdQBuAGQAAABkAGUAbgB2AGkAdAByAHUAawAAAFIAbwBiAG8AdAAgAGkAbgAgAGMAaQByAGMAbABlACAAaQBjAG8AbgAgAHMAZQB0AC4AIABCAG8AdAAgAHMAaQBnAG4AIABkAGUAcwBpAGcAbgAuACAAQwBoAGEAdABiAG8AdAAgAHMAeQBtAGIAbwBsACwAIABsAG8AZwBvACAAdABlAG0AcABsAGEAdABlAC4AIABNAG8AZABlAHIAbgAgAGYAbABhAHQAIABzAHQAeQBsAGUAIABjAGEAcgB0AG8AbwBuACAAYwBoAGEAcgBhAGMAdABlAHIAIABpAGwAbAB1AHMAdAByAGEAdABpAG8AbgBzACAAaQBzAG8AbABhAHQAZQBkACAAbwBuACAAdwBoAGkAdABlACAAYgBhAGMAawBnAHIAbwB1AG4AZAAAAP/hBbRodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIi8+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxkYzpjcmVhdG9yPjxyZGY6U2VxIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpsaT5kZW52aXRydWs8L3JkZjpsaT48L3JkZjpTZXE+DQoJCQk8L2RjOmNyZWF0b3I+PGRjOnRpdGxlPjxyZGY6QWx0IHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5Sb2JvdCBpbiBjaXJjbGUgaWNvbiBzZXQuIEJvdCBzaWduIGRlc2lnbi4gQ2hhdGJvdCBzeW1ib2wsIGxvZ28gdGVtcGxhdGUuIE1vZGVybiBmbGF0IHN0eWxlIGNhcnRvb24gY2hhcmFjdGVyIGlsbHVzdHJhdGlvbnMgaXNvbGF0ZWQgb24gd2hpdGUgYmFja2dyb3VuZDwvcmRmOmxpPjwvcmRmOkFsdD4NCgkJCTwvZGM6dGl0bGU+PGRjOmRlc2NyaXB0aW9uPjxyZGY6QWx0IHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5Sb2JvdCBpbiBjaXJjbGUgaWNvbiBzZXQuIEJvdCBzaWduIGRlc2lnbi4gQ2hhdGJvdCBzeW1ib2wsIGxvZ28gdGVtcGxhdGUuIE1vZGVybiBmbGF0IHN0eWxlIGNhcnRvb24gY2hhcmFjdGVyIGlsbHVzdHJhdGlvbnMgaXNvbGF0ZWQgb24gd2hpdGUgYmFja2dyb3VuZDwvcmRmOmxpPjwvcmRmOkFsdD4NCgkJCTwvZGM6ZGVzY3JpcHRpb24+PC9yZGY6RGVzY3JpcHRpb24+PC9yZGY6UkRGPjwveDp4bXBtZXRhPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9J3cnPz7/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCADzAPIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKACio5GO7AOPwNcT48+MHhL4bwtJr2u29rJj5bZCZJm69EXJ/P0r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'
      />
    </defs>
  </svg>
)

export default BotAvatar
