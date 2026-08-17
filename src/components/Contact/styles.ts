import styled from 'styled-components'

type ContactIconProps = {
  colorTo: string
  colorFrom: string
}

export const Container = styled.section`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 72rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media (min-width: 640px) {
    max-width: 640px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 6rem;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`

export const ContainerContact = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;

  @media (min-width: 640px) {
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    gap: 4rem;
  }
`

export const Wrapper = styled.div`
  position: relative;
`

export const Content = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-100']};

  @media (min-width: 640px) {
    margin-bottom: 2rem;
  }

  @media (min-width: 640px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  span {
    color: ${({ theme }) => theme['yellow-500']};
  }
`

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
  border-width: 1px;
  border-color: ${({ theme }) => theme['yellow-500']};
  background-color: ${({ theme }) => theme['gray-700']};
  padding: 1rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;

  margin-top: 1rem;

  @media (min-width: 640px) {
    border-radius: 1rem;
    padding: 1.25rem;

    margin-top: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 1.5rem;

    margin-top: 2rem;
  }
`

export const ContactIcon = styled.div<ContactIconProps>`
  background-image: linear-gradient(
    to right,
    ${(props) => `${props.colorFrom} 0%, ${props.colorTo} 100%`}
  );

  display: flex;
  height: 3rem;
  width: 3rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;

  @media (min-width: 640px) {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 1rem;
  }

  @media (min-width: 1024px) {
    height: 4rem;
    width: 4rem;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ theme }) => theme['gray-100']};

    @media (min-width: 640px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`

export const ContactContainer = styled.div`
  min-width: 0px;
  flex: 1 1 0%;
  margin-left: 0.75rem;

  @media (min-width: 640px) {
    margin-left: 1rem;
  }

  @media (min-width: 1024px) {
    margin-left: 1.5rem;
  }
`

export const ContactContainerTitle = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-100']};

  @media (min-width: 640px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`

export const ContactContainerDescription = styled.p`
  word-break: break-all;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme['green-300']};

  @media (min-width: 640px) {
    overflow-wrap: break-word;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`

export const CXGradient = styled.div`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  bottom: -0.25rem;
  left: -0.25rem;
  border-radius: 1rem;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['blue-gradient']}
  );

  opacity: 0.3;

  @media (min-width: 640px) {
    border-radius: 1.5rem;
  }
`

export const Form = styled.form`
  position: relative;
  border-radius: 1rem;
  border-width: 1px;
  border-color: ${({ theme }) => `${theme['green-700']}33`};
  background-color: #000000cc;
  padding: 1rem;

  @media (min-width: 640px) {
    border-radius: 1.5rem;
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`

export const FormGroup = styled.div`
  &:not(:last-child) {
    margin-top: 1rem;

    @media (min-width: 640px) {
      margin-top: 1.5rem;
    }
  }

  label {
    display: block;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme['gray-100']};

    @media (min-width: 640px) {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
  }

  input {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    outline: none;

    width: 100%;
    border-radius: 0.5rem;
    border-width: 1px;
    border-color: ${({ theme }) => theme['gray-900']};
    background-color: ${({ theme }) => theme['gray-900']};
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme['gray-100']};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.3s;

    margin-top: 0.5rem;

    @media (min-width: 640px) {
      border-radius: 0.75rem;
      padding: 1rem 1.5rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    resize: none;
    width: 100%;
    border-radius: 0.5rem;
    border-width: 1px;
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    border-color: ${({ theme }) => theme['gray-900']};
    background-color: ${({ theme }) => theme['gray-900']};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.3s;
    margin-top: 0.5rem;

    @media (min-width: 640px) {
      border-radius: 0.75rem;
      padding: 1rem 1.5rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`

export const ButtonSend = styled.button`
  outline: none;
  border: none;
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
  text-transform: none;
  -webkit-appearance: button;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme['green-dark-gradient']}
  );

  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;

  font-weight: 700;
  color: ${({ theme }) => theme['gray-100']};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 640px) {
    border-radius: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 1.75rem;

    margin-top: 1.4rem;
    margin-bottom: 1.5rem;
  }
`
