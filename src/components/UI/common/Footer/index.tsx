import {
  Stack,
  FormControl,
  useColorModeValue,
  Container,
  Input,
  Heading,
  Box,
  Text,
  Icon,
  Button,
  Flex,
} from '@chakra-ui/react';
import { FormEvent, ChangeEvent, useState, Fragment } from 'react';
import { CheckIcon } from '@chakra-ui/icons';
import ButtonBox from '../ButtonBox';

export const Footer = () => {
  function handleRoute(route: string) {}
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'initial' | 'submitting' | 'success'>('initial');
  const [error, setError] = useState(false);
  return (
    <Stack
      paddingY='28px'
      justify='flex-start'
      align='center'
      spacing='10px'
      width='100%'
      maxWidth='100%'
      background='#F5F5F5'
    >
      <Stack width='80%'>
        <Stack
          justify='flex-start'
          align='center'
          spacing='80px'
          width='100%'
          maxWidth='100%'
        >
          <Stack
            justify='space-between'
            align='center'
            spacing='10px'
            background='#FFFFFF'
            w={'100%'}
            direction='row'
            flexWrap={{ base: 'wrap', xl: 'nowrap' }}
            padding={{ base: '2rem 2rem', xl: '48px 67px ' }}
          >
            <Flex
              alignItems={'flex-end'}
              cursor={'pointer'}
              flex={{ base: '0 0 100%', xl: '0 0 50%' }}
            >
              <svg
                width='33'
                height='39'
                viewBox='0 0 33 39'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0.5 39V16.2L21.3095 1V39' stroke='#2B4248' />
                <path d='M11.3574 39V16.2L32.1669 1V39' stroke='#2B4248' />
                <path d='M21.3098 20L11.3574 26.8623V39H21.3098V20Z' fill='#2B4248' />
              </svg>

              <Text
                fontFamily='Josefin Sans'
                lineHeight='1.3'
                fontWeight='regular'
                fontSize='30px'
                letterSpacing='0.15em'
                textTransform='capitalize'
                color='#2B4248'
                ml={'1rem'}
              >
                <span> Base</span>
                <Box as='span' fontWeight='bold' textTransform='uppercase'>
                  type
                </Box>
              </Text>
            </Flex>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              justify='flex-end'
              spacing={'4rem'}
              padding={{ base: '2rem 0', xl: 0 }}
              borderTop={{ base: '1px solid gray.100', xl: 0 }}
            >
              <Text
                fontFamily='Josefin Sans'
                lineHeight='1.3'
                fontWeight='medium'
                fontSize='25px'
                textTransform='capitalize'
                color='#2B4248'
                onClick={() => handleRoute('services')}
                cursor={'pointer'}
              >
                Services
              </Text>{' '}
              <Text
                fontFamily='Josefin Sans'
                lineHeight='1.3'
                fontWeight='medium'
                fontSize='25px'
                textTransform='capitalize'
                color='#2B4248'
                onClick={() => handleRoute('services')}
                cursor={'pointer'}
              >
                Projects
              </Text>{' '}
              <Text
                fontFamily='Josefin Sans'
                lineHeight='1.3'
                fontWeight='medium'
                fontSize='25px'
                textTransform='capitalize'
                color='#2B4248'
                onClick={() => handleRoute('services')}
                cursor={'pointer'}
              >
                Blog
              </Text>
              <Text
                fontFamily='Josefin Sans'
                lineHeight='1.3'
                fontWeight='medium'
                fontSize='25px'
                textTransform='capitalize'
                color='#2B4248'
                onClick={() => handleRoute('services')}
                cursor={'pointer'}
              >
                About
              </Text>
              <Text
                fontFamily='Josefin Sans'
                lineHeight='1.3'
                fontWeight='medium'
                fontSize='25px'
                textTransform='capitalize'
                color='#2B4248'
                onClick={() => handleRoute('services')}
                cursor={'pointer'}
              >
                Contact
              </Text>
            </Stack>
          </Stack>
          <Stack
            direction={{ base: 'column', xl: 'row' }}
            justify='space-between'
            align='flex-start'
            width='100%'
          >
            <Stack
              justify='flex-start'
              align='flex-start'
              spacing='19px'
              width='339px'
              maxWidth='100%'
            >
              <Stack direction='row' justify='center' align='center' spacing='19px'>
                <Text
                  fontFamily='Josefin Sans'
                  lineHeight='1.3'
                  fontWeight='medium'
                  fontSize='25px'
                  textTransform='capitalize'
                  color='#2B4248'
                >
                  Fb
                </Text>
                <Text
                  fontFamily='Josefin Sans'
                  lineHeight='1.3'
                  fontWeight='medium'
                  fontSize='25px'
                  textTransform='capitalize'
                  color='#2B4248'
                >
                  Tw
                </Text>
                <Text
                  fontFamily='Josefin Sans'
                  lineHeight='1.3'
                  fontWeight='medium'
                  fontSize='25px'
                  textTransform='capitalize'
                  color='#2B4248'
                >
                  In
                </Text>
              </Stack>
              <Text
                fontFamily='Josefin Sans'
                lineHeight='1.57'
                fontWeight='regular'
                fontSize='22px'
                color='#767676'
                width='339px'
                maxWidth='100%'
              >
                438 Marine Parade Elwood, Victoria P.O Box 3184
              </Text>
              <Text
                fontFamily='Josefin Sans'
                lineHeight='1.57'
                fontWeight='regular'
                fontSize='22px'
                color='#767676'
                width='339px'
                maxWidth='100%'
              >
                Phone: +714 3948 0000 Email: hello@architype.com
              </Text>
            </Stack>
            <Stack
              justify='flex-start'
              align='flex-start'
              spacing='19px'
              width={{ base: '90%', md: '60% ', xl: '50%' }}
              maxWidth='100%'
              paddingTop={{ base: '2rem', xl: 0 }}
            >
              <Text
                fontFamily={`'Junge', serif`}
                lineHeight='1.3'
                fontSize={{ base: '2.5rem', xl: '35px' }}
                textTransform='capitalize'
                color='#2B4248'
                width='448px'
                maxWidth='100%'
              >
                Want to talk about a new project?
              </Text>

              <Stack
                direction={{ base: 'column', md: 'row' }}
                as={'form'}
                spacing={'12px'}
                onSubmit={(e: FormEvent) => {
                  e.preventDefault();
                  setError(false);
                  setState('submitting');

                  // remove this code and implement your submit logic right here
                  setTimeout(() => {
                    if (email === 'fail@example.com') {
                      setError(true);
                      setState('initial');
                      return;
                    }

                    setState('success');
                  }, 1000);
                }}
                w={'100%'}
                h={'100%'}
              >
                <FormControl>
                  <Input
                    variant={'solid'}
                    color={'green.900'}
                    _placeholder={{
                      color: 'green.900',
                    }}
                    p={{ base: '1rem 0 2rem', xl: 0 }}
                    w={'100%'}
                    h={'100%'}
                    id={'email'}
                    borderBottom={'2px solid #2B4248'}
                    type={'email'}
                    bg={'transparent'}
                    required
                    placeholder={'Your Email'}
                    aria-label={'Your Email'}
                    value={email}
                    disabled={state !== 'initial'}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                  />
                </FormControl>
                <FormControl w={{ base: '100%', md: '40%' }}>
                  <ButtonBox
                    variant={'primary'}
                    type={state === 'success' ? 'button' : 'submit'}
                    icon={state === 'success' ? '' : 'white'}
                    text={
                      state === 'success' ? (
                        <Fragment>
                          <CheckIcon />
                        </Fragment>
                      ) : (
                        'Submit'
                      )
                    }
                  />
                </FormControl>
              </Stack>
              <Text
                mt={2}
                fontSize={{ base: '1.5rem' }}
                textAlign={'center'}
                color={error ? 'red.500' : 'green.900'}
              >
                {error
                  ? 'Oh no an error occured! Please try again later.'
                  : "You won't receive any spam!"}
              </Text>
            </Stack>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify='center'
            align='center'
            spacing='3px'
            width='100%'
          >
            <Text
              fontFamily='Josefin Sans'
              fontWeight='regular'
              fontSize='22px'
              color='#767676'
              p={0}
            >
              <span>Copyright © BaseType | </span>
            </Text>
            <Text
              fontFamily='Josefin Sans'
              fontWeight='regular'
              fontSize='22px'
              color='#767676'
            >
              <span> {new Date().toDateString().split(' ').join('.').slice(4)} </span>
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
