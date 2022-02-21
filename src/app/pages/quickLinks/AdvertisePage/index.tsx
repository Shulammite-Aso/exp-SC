import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import {
  FormProvider,
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { customMedia } from 'styles/media';
import Hero from '../components/Hero';
import { BackText } from 'app/components/BackText';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { Button } from 'app/components/Button/Button';
import { ReactComponent as Attachment } from './assets/Attachment-Vector.svg';
import { StyleConstants } from 'styles/StyleConstants';
import {
  FormValues,
  FormField,
  ControlledTextInput,
  ControlledTextArea,
} from './components/FormField';

const schema = yup.object().shape({
  companyName: yup.string().required(),
  companyAddress: yup.string().required(),
  email: yup.string().required().trim().email(),
  phone: yup.string().required(),
});

interface Props {}

export function AdvertisePage(props: Props) {
  // const [selectedFile, setSelectedFile] = useState(null);
  const { t } = useTranslation();
  const formMethods = useForm<FormValues>({
    defaultValues: {
      companyName: '',
      companyAddress: '',
      email: '',
      phone: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = form => console.log(form);

  const onErrors: SubmitErrorHandler<FormValues> = errors =>
    console.warn('errors:', errors);

  const fileSelectedHandler: React.ChangeEventHandler<HTMLInputElement> = event =>
    console.log(event.target.files);

  return (
    <>
      <Helmet>
        <title>Advertise Page</title>
        <meta name="description" content="AltMall's Advertise page" />
      </Helmet>
      <Wrapper>
        <Hero title="Advertise on Altmall" />
        <BackBtnAndContent>
          <BackBtn>
            <BackText text={t(...messages.back())} />
          </BackBtn>
          <CardWrap>
            <Card>
              <H3>Enter your Company Details</H3>
              <FormProvider {...formMethods}>
                <FormField
                  component={ControlledTextInput}
                  label="Company Name"
                  name="companyName"
                />
                <FormField
                  component={ControlledTextArea}
                  label="Company Address"
                  name="companyAddress"
                />
                <FormField
                  component={ControlledTextInput}
                  name="email"
                  label="Email Address"
                />
                <FormField
                  component={ControlledTextInput}
                  name="phone"
                  label="Phone Number"
                />
                <FileUploadWrapper>
                  <label htmlFor="upload">
                    <AttachmentIcon />
                  </label>
                  <Input
                    type="file"
                    id="upload"
                    onChange={fileSelectedHandler}
                  />
                  <p>
                    Attach your company brief <span>(max 20MB)</span>
                  </p>
                </FileUploadWrapper>
              </FormProvider>
              <Btn
                className="btn btn-primary"
                type="submit"
                onClick={formMethods.handleSubmit(onSubmit, onErrors)}
              >
                Save
              </Btn>
            </Card>
          </CardWrap>
        </BackBtnAndContent>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  padding-bottom: 5rem;
`;

const BackBtnAndContent = styled.div`
  margin: 0 auto;
  color: ${p => p.theme.color.colorTextLightGray};
  font-size: 14px;
  display: flex;
  justify-content: center;
  width: 83%;
  margin-top: 80px;
  ${customMedia.lessThan('large')`
    flex-wrap: wrap;
    flex: start;
    justify-content: space-between;
  `};
`;

const BackBtn = styled.div`
  margin-right: 10%;
  margin-bottom: 24px;
`;

const CardWrap = styled.div`
  margin: auto;
  padding: 10px;
  width: 606px;
  text-align: ${p => p.theme.direction['left']};
  ${customMedia.lessThan('small')`
    padding: 0px;
  `}
`;

const Card = styled.div`
  background-color: ${p => p.theme.color.colorBackground};
  padding: 48px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 16px 24px rgba(142, 141, 208, 0.12);

  ${customMedia.lessThan('small')`
    padding: 18px 17px;
    box-shadow: none;
    border-radius: 0px;
    background-color: transparent;

  `}
`;

const H3 = styled.h3`
  font-weight: bold;
  font-size: 16px;
  color: ${p => p.theme.color.colorTextBold};
  margin-bottom: 16px;
`;

const Btn = styled(Button)`
  width: 100%;
  margin-top: 60px;
`;

const AttachmentIcon = styled(Attachment)`
  height: 20px;
  width: 20px;
  ${p => p.theme.direction['margin-right']}: 14px;
  cursor: pointer;

  &:hover {
    color: ${StyleConstants.COLOR_ACCENT_HOVER};

    path {
      stroke: ${StyleConstants.COLOR_ACCENT_HOVER};
    }
  }
`;

const FileUploadWrapper = styled.div`
  display: flex;

  span {
    color: ${StyleConstants.COLOR_ACCENT};
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;
