import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";
import InfoTap from "Components/InfoTap";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(2px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    z-index: 1;
    height: 100%;
`;

const Cover = styled.div`
    width: 30%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    height: 100%;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
`;

const Title = styled.h1`
 font-size: 32px;
 font-weight: 700;
 margin-bottom: 20px;
`
const ItemContainer = styled.div`
display: flex;
margin: 20px 0;
`

const Item = styled.div`

`

const Divider = styled.span`
    margin: 0 10px;
`
const Overview = styled.p`
    font-size: 12px;
    color:rgba(255,255,255,0.7);
    line-height: 1.5;
    width: 50%;
    margin-bottom: 20px;
`;

const VideoContainer = styled.div`
position: relative;
width: 100%;
height: 600px;
background-color: rgba(0,0,0,0.7);
box-shadow: 0 0 20px white;
z-index: 100;
margin-bottom: 100px;
display: flex;
flex-wrap: nowrap;
overflow-x: auto;

@keyframes showPopUp{
    from{
        height: 0px;
        opacity: 0;
    }
    to{        
        height: 600px;
        opacity: 1;
    }
}
@keyframes hidePopUp{
    from{
        height: 600px;
    }
    to{
        height: 0px;
        opacity: 0;
    }
}
`
const HideVideoBtn = styled.div`
    right: 20px;
    top: 60px;
    font-size: 30px;
    cursor: pointer;
    position: fixed;
    height: 30px;
    opacity: 0.5;
    
`

const ShowVideoBtn = styled.button`
`

const IMDBLink = styled.a`
`
const IMDBLogo = styled.img`
width: 80px;
height: 30px;

`
const DetailPresenter = ({result, error, loading}) => (
    loading ? (
        <>
        <Helmet>
            <title>Loading | Nomflix-Jiwon</title>
        </Helmet>
        <Loader/>
        </>
    ) : (
    <Container>
        <Helmet>
            <title>{result.original_title ? result.original_title : result.original_name} | Nomflix-Jiwon</title>
        </Helmet>
        <Backdrop 
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
        <VideoContainer id="videoContainer"> 
        {result.videos.results.map( (video,index) => video ? 
            <iframe width="100%" height="100%" style={{flex:"0 0 auto"}}
        src={`https://www.youtube.com/embed/${video.key}?autoplay=${index===0 ? 1 : 0}`} 
        frameborder="0" title="Youtube" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen=""></iframe> : null)}
        <HideVideoBtn role="img" aria-label="close" onClick={hidePopUp}>Hide Videos X</HideVideoBtn>
        </VideoContainer>
    <Content>
        <Cover  bgImage={result.poster_path ? 
            `https://image.tmdb.org/t/p/original${result.poster_path}`
            : ""} />
    <Data>
        <Title>
            {result.original_title ? result.original_title : result.original_name}
        </Title>
        <IMDBLink href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank">
            <IMDBLogo src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxENDRANDQ8QDQ0NDg0NDQ8NDhANDQ8NFREiFhURExUYHSgsGBolJx8TITIhJSkrLjo6GB8zOzMuNygtLisBCgoKDg0OGBAQGismHSUrKystKy8rKy0tLS0tMC0wLS0tLi0rKy0tLS0tMC0tLS0tKy0uKy0tLS01Li4rLSsrLf/AABEIAKMBNQMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcCAwEECAX/xABOEAABAwECBgwKBwYFBQEAAAABAAIDBAURBgcSITSRExQxNVFScXN0krGzFyUyM0FTYXWy0SJUk5Shw9NicoGCosEjJENjwhVCZIPwCP/EABoBAQACAwEAAAAAAAAAAAAAAAABBQIEBgP/xAA2EQEAAQICBggFBQACAwAAAAAAAQIDBBEFEjEyUXETMzRSgZHB0RQhQWGhBhUisfAj4SRCcv/aAAwDAQACEQMRAD8AupAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQcOcALyQBwk3BRMxEZyRGbXtmP1jOu35rDprfejzhlqVcJNsx+sZ12/NOmt96PODUq4SbZj9Yzrt+adNb70ecGpVwk2zH6xnXb806a33o84NSrhJtlnrGddqdNb70ecGpVwNsM9YzrtTprfejzg1KuBthnHZ12p01vvR5walXBzs7OOzrBOmt96PODUq4Gzs47esE6W33o84NWrgbM3jt6wTpbfejzg1auDnZm8ZvWCdLR3o84NWeBsreM3rBT0tHejzRqzwNlbxm9YJ0tHejzNWeBsreM3WE6SjvR5mrPA2VvGbrCdJRxjzNWeBsjeMNYTpKOMeZqzwNkbxhrCdJRxjzNWeBsjeM3WE6SjjHmas8DZW8ZusJ0lHejzNWeBsreM3rBOlo70eZqzwNlbxm9YJ0tHejzNWeBszeM3rBR0tHejzhOrPBxszeO3rBOlt96PODVngbOzjt6wTpbfejzg1auBs7OOzrBOlt96PODUq4ONsM47Os1Omt96PODUq4G2GcdnXanTW+9HnBqVcDbLPWM67U6a33o84NSrgbZj9Yzrt+adNb70ecGpVwk2zH6xnXb806a33o84NSrhJtmP1jOu35p01vvR5walXCTbMfrGddvzTprfejzg1KuEgqGHMJGH+dqRdtz/7R5walXBtXoxEBAQdS1K4U0RkOc+SxvGedwf3/AILVxmKpw1qbk+EcZetm1NyrVQasrJJ3ZUri4+gf9rfYB6FxOIxN2/VrXJz/AKjkuKLdNEZUw0XLwZlyBcgyAU5IZtCyyhDY0LKIhDa0L0iGLa0LOIYtrQsohDY0LOIYtgCziEM2hZRDFmAsohDMBZxCGQCyiEMgFlkhyQmQxIWMwlgQomEsSFhMJYELGYS1kLCYSwcFjMMmtwWEwlrcFhMMmlwWEwlqcFhMQyayFhlDJgQoyhLAhYpLkC5AuQfVsa2X07g15LoSbiDnLBwt+StNH6Trw9UU1znR/XL2a1/DxcjONqag35xnBzjkXZxOaocoCCM4ZPP+C30f4jv45guc/UFU/wDHT9Pn6LDAxvTyRpc2sBAQEGQWUIbGhZQhuaFnDFtaFnDFtaFnDFsaFnCGxoWUMWxoWcIbGhZQxZgLKEMwFlCGQCzQ5Ugg4KgYkLGUsSFjKWshYylgQsZS1uCwlk1uCwlLW4LGWUNTgsJZQ1OWEphqcFhLKGorBkxKxlLhAQEBBPrGcTSwk7uxtGrMu8wEzOGtzPCFJfjK5Vzd1bbyEEYwy8qHkk7Qua/UG234+ixwOyrwRtc63xAQEGTVMIbmr0hjLaxZwxltaFnCG1qyhjLa1ZwxbGrOENjQsoYtgCyhDMLKEMgsoQyCyQ5Ugg4UZjgqJSwKxlLAhYylg4LGUtZCwlLW5YyyanLCWTU5YSlqcFhLKGpyxllDS5YSyYFYJEBAQEE9sTRYebC7vR3ZbfJS4jraubvLceIgjGGXlQ8knaFzX6g22/H0WOB2VeCNrnW+ICAgh+MTC2qsyanjpXRtbJT7I7Lia85WWRfeeQLpdF4O1etZ1wrsTdqoryhExjRtLjw/d2Ky/bMPw/LX+Irc+FK0+PD93Yp/bbHD8o+IrXZYs7poKWaS4vmpqeV9wABe6MEm70bpXO3qYpvzTGz5+repnOjNTVRjTtNkj2h8NzXuaP8ALs3AV0UaPsZbGjN6th4WLU9ZB93Ysv2+xwR01bnws2p6yD7uxPgLPA6apOMVeG9TatRUU9a6NxZA2aLY42xnM8B25u7rVp47C0W6M6Yelq5Mz800wntJ1FZ1XVxkCSCne6MuAcBIczbwd3OQtHCURXciJetycqVK+F21fWQfdo1efBWuDV6Wo8L1q+sg+7Rp8Fa4HSVOfC9avrIPu0an4O1wOkqWnirwkqLWoJaiscx0kdW6FpjYIxkCJrrrh7SVXY21TbmIpetqqZ2ozjPxgV9l2kaWkfE2HYIZLnwsecpwN+crZw2Hort51MK65iUS8L9q+sg+7RrY+DtcGPSVHhetX1kH3Zij4K1wOkqbGY4rTG7tV371P8nBROBtHS1O/RY6qoH/ADFHTSt/2TLTu1ku7F5VaNtzsn/fhlF6pP8ABTDyitYiKJzqeqN91PPcHPuF52NwzP8ATmzHNuKtxGArtxnHzh70Xon5JI4Kul7q0xn4b1ll10VPSOjbG+kimIfE2Q5Zke0m88gV3gsLbu2taqP98mpduVU1ZQh5xr2px4Pu7Ft/t1jg8+nrbaPGhaUksbHPhyXyMabqdl9xdcVjVo+xETOSYv15rnqh9N3KuTu70rOnY6rl5S9IaXLCWTWsEiAgICCe2JosPNhd3o7stvkpcR1tXN3luPEQRjDLyoeSTtC5r9Qbbfj6LHA7KvBG1zrfEBByEFYY5tKpOifmOXXaE6iefoqsZvq8Vy1BB6ewZ0Sh6FSdyFyGI7TPOfVZ0dXDzRW+ek5x/wAS62nZCtna0LJAgnWJer2K24meiohqIP6NkHwhaeOp1rMvS1OVSz8b9RsdhVAvuM0tNEPtA8j+kqr0bTndze9+f4vOy6BqCAgvvEHvTUe8JO4YqfSW9HL3bFnYg2PPfs9FpuwrdwXVPK5vK9W2wEBAQZwyuje2Rjix7HNexzSWua4G8OB9BCiYz+Uj0vgbbhtOzYKx12yuDop7sw2ZhuJ9l+Z13tXMY6z0VyYhv2atalVWPPfWHoEHeyK40Z1Pj6Q1r+8rpWDxdmzNIh56L4wsa92eSY2vTtV5buVcLd3pXFOx1XrxlnDS9YSyhrKxZOEBAQEE9sTRYebC7vR3ZbfJS4jraubvLceIgjGGXlQ8knaFzX6g22/H0WOB2VeCNrnW+ICDlqCscc+lUnRPzXLrtCdRPP0VWM31dq5agg9PYNaJQ9CpO5C4/ET/AOTPOfVZ0dW80VvnpOcf8S66nZCtna0LJAg+/gDV7BbFBJ6Ntwxn2NkdkE6iV44iM7VUfZlRvQtLH3UBtn0sN+eSsfJdwiOMj/kFWaLj+VUve/PyhRyuWsICC+8Qe9NR7wk7hiptJzEVRy92xZ2INj037PRabsK3cDP/ABQ8rm8r1bjAQek8Y+D1LPZVXIaeFs1PTPnhlZGxkrXMblXZQGcG64hUWGxFUXopz+TarojVzebFetUQXjiNkvsqoaT5Nc4j+aFnyVDpfLWift7tvDbETx576w9Ag72RbujOp8fSHlf3ldKxeLs2ZpEPPRfGFjXuzyTG16eqGFz3XC/OuGrpmquclvTOUOjLNG05LpoWO4rpo2u1Xp8Ldn5xCekp4jozdlD6TeM0hzdYXhXarp2w9IqidjS5eTNigICAgntiaLDzYXd6O7Lb5KXEdbVzd5bjxEEYwy8qHkk7Qua/UG234+ixwOyrwRtc63xAQZNUoVhjo0qk6J+a5ddoXqJ5+irxe+rtXDUEHpzBrRKHodJ3IXGYntU859VpR1cPNVb56TnH/Euxp3YVk7WhZIc5JuvuzG8A+i8f/BBspZzFIyVvlRvZI3labwoqjOJgWjj7qw+agY033U80/wDLK4AH+kqs0ZTlTXP3e96c5hVTW3kAZySAOVWjwcyMLXFrsxaS0jgINxSJzGKC+cQo8U1HvB/cMXP6Y36eXu2bGxB8eW/R6LTdhVjo7qIeV3eV8t95iD1LhoPFVoe76ruSuUw3ao5x6N6vceWl1bREF0YjT4vqx/5TO7XP6a208m5hfqjWPDfSHoEHeyLd0T1Hj6Q8sRvq8Vm8G6jlEcsb3X3MkY83btwdebljVGcTCY2pNhhh3VWnI4Ne6npLzkQRuyb28MhHlH8Fq4bBW7MbM54vS5dmrkia3Hk+jY1t1FBIJKWZ8RBvLQTsb/Y9u44cq8rtmi7GVcZsqa5pnOF44O2020qKOrYAxxJinjG4ydu6B7DmI5VxukMJ8PdyjYtsPd16XfVe2BAQEE9sTRYebC7vR3ZbfJS4jraubvLceIgjGGXlQ8knaFzX6g22/H0WOB2VeCNrnW+ICDNqlCsMdGlUnQ/zXLrtC9RPP0VeL31dK4agg9O4NaJQ9CpO5C4zE9qnnPqtKOreaa3z0nOP+JdjTshWTtaFkh9eWk8VQ1A3BX1cLv4wROb2OXlFX/LNP2j+5ZZfxzfIXqxSbDu0ttSUTicox2VQROP7YaS78SVrYajUir/6lnXOeXJ87BSm2e0qKG6/ZKymYR+yZRf+F69b1Wrbqn7Sxp2w6VoG+eXnZPiKyp3YJddZIX3iCHimo94SdwxUGmN+nl7tizsQbHpv2ei03YVY6O6iHnc3lereeYg9TYaDxTaHu+q7krlcN2qOcejdr3HlldU0hBdGIzQKvpUfdqg01tpbeG+qN48d9IegQd7ItzRPUePpDzxG+rtWbwcsaXEAZySABwkoLNwjxXR0lDLURVL3z00WzTNexoieAL35F2dt2c579xU9jSnSXujmltV4fVp1s1Yq4aogtjE4++irG+htRC4cpYR/Zc5p6N2f9tb+C+qcrm1iICAgntiaLDzYXd6O7Lb5KXEdbVzd5bjxEEYwy8qHkk7Qua/UG234+ixwOyrwRtc63xAQZhShWGOjSqTof5rl12heonn6KrF76ulcNUQencGtEoehUnchcZie1Tzn1WlHVw801vnpOcf8S7GnZCsna0LJCZ01JsmCk0g/0LYZIf3XU4Zdrc3UtOassVEcafV6Zf8AH4oYtx5uSb93P6M/Agl+KOm2W3qMXXiN0srvZkROIOu5auNqysVM7cfyRav89LzsnxLYp2QwloWQv3EAPFNR7wk7hiodL78cvdsWdiC49d+z0Wm7CrDR/Uw8rm8rxbzAQep8Nd6bQ931Xclcrhu1Rzj0btW48sLqmkILpxGaBV9Kj7tUGmttLbw31RrHjvpB0CDvZFuaJ6jx9IeeI31dqzeDs2bpEPPRfEFjXuzyTG16Mwu0C0eg1ndFcfhO1084/uFnd6uXmpdkqxBauJrRa7nabscue09sp/31hv4LbKeLmViICAgntiaLDzYXd6O7Lb5KXEdbVzd5bjxEEYwy8qHkk7Qua/UG234+ixwOyrwRtc63xAQZhShWGOjSqTof5rl12heonn6KrF76ulcNUQencGtEoehUnchcZie1Tzn1WlHVw801vnpOcf8AEuxp2QrJ2tCyQs/BCk2fBG1WcWd0w5YmRyf8VWX6tXF25+395vamM7cqwVm8RBZeIOmy7WlluzQ0cmfge6RrR+GUq/SVWVqI+71tbVeV/n5edk+Irep2Q85ddZIX7iA3pqPeEncMVDpffjl7tizsQXHrv2ei03YVYaP6mHlc3leLeYCD1PhrvTaHu+q7krlcN2qOcejdq3HlhdU0hBdOIzQKvpUfdqg01tpbeG+qNY8d9IOgQd7ItzRPUePpDzxG+rtWbwdmzNIh56L4wsK92eSY2vRmF2gWj0Gs7orkMJ2unnH9ws7nVy81LslWILVxNaLXc7Tdjlz2ntlP++sN/BbZTxcysRAQEE9sTRYebC7vR3ZbfJS4jraubvLceIgjGGXlQ8knaFzX6g22/H0WOB2VeCNrnW+ICDNqlCsMdGlUnQ/zXLrtC9RPP0VeL31dK4agg9O4NaJQ9CpO5C4zE9qnnPqtKOrh5prfPSc4/wCJdjTshWTtaFkhdWJymE9h10BzieoqYT/NStCpdI16t+ieX9y2bMZ0SpVXTWEFy/8A56piBXTkZiaWFp9v0nOHwKp0pVuRze9mNqorQ8/LzsnxFWlO7Dxl11khfmII+Kaj3hJ3DFQaX36eXu2LOxBcem/Z6LTdhVjo7qIedzeV6t55iD1NhqfFNoe76nuiuVw3ao5x6N2vceWV1TSEF04jNAq+lR92qDTW2lt4b6o1jx30h6BB3si3NE9R4+kPPEb6u1ZvB2bM0iHnovjCwr3Z5Jja9GYXaBaPQazuiuQwna6ecf3CzudXLzUuyVYgtXE1otdztN2OXPae2U/76w38FtlPFzKxEBAQT2xNFh5sLu9Hdlt8lLiOtq5u8tx4iCMYZeVDySdoXNfqDbb8fRY4HZV4I2udb4gIMmqUKwx0aVSdD/Ncuu0L1E8/RV4vfV2rhqCD05g1olD0Ok7kLjMT2qec+q0o6uHmqt89Jzj/AIl2NO7Csna0LJC8sRRusyb3g7uWKg0tOV2jw9W3h92VP4S0uwWhVw3XbFVVEYG5mEhA/sruzVrW6Z+0NWqMpl81eiF/YiabY7JdIf8AXrZXD91rGt7Q5UGlK871Mf76tqzH8ZUTaPn5edk+Iq9p3Ya07XXWSF84hT4pqPeEncMVBpjfp5e7ZsbEHx5b9HotN2FWGjuoh5Xd5Xy33mIL7xjYc0P/AEyop6apjqaiqiELGQkyNa0kB7nOGYZr819/4qhwmDudPr1RlDZruRq5QoRXzWEF2Yj23WZUu41bk6omn+657TU/ypj7e7cw2yUWx476Q9Ag72Rb2ieo8fSHliN9Xis3g30LwyaNxzBskbjyB16xrjOmYTG16MwwddZ9on0bRqhriuC5DBx/5cc49Fnd6uXmxdiqxBa2Jsf5StPoM1ONTSud09sp/wB9Yb+C2yna5pYiAgIJ7Ymiw82F3ejuy2+SlxHW1c3eW48RBGMMvKh5JO0Lmv1Btt+PoscDsq8EbXOt8QEGTUFYY59KpOifmuXXaE6iefoqsZvq7Vy1BB6bwb0Sh6FSdyFxmJ7VPOfVa0dXDzXW+ek5x/xLsad2FXO1oWSF34kD4qn6e/uGLndNfKunlHq3MNslX2Nam2K3KvNcJDFK32h8TSTrytSt8DVrWKWvdjKuURW283pXFbTbDYtA30vZJMf/AGSFw/Ahcxj688T/ALg3bUfwecrR8/LzsnxFdLRuw052uuskL3xDnxTP09/cMXP6Y36eXu2rGxCMeG/R6LTdhVjo3qIeN3eV+t95iAgICD0Ri3sh1DZEEcjciadz6uVpFzgX3BgI9ByQzMuU0rei5eyj6LDD05Uq6x4b6Q9Ah716uNE9R4+kNbEb6vFZvAQffr8M7Qqabak1U58GS1jm5LGue0bgc8C93o3StajCWaK9eKfmzm5VMZTL4C2WAguXFXRuhsp0jxdtqpfIzhMTGhl+sOXLacuxNyKY+n+9llgqcozSxULeEBAQT2xNFh5sLu9Hdlt8lLiOtq5u8tx4iCMYZeVDySdoXNfqDbb8fRY4HZV4I2udb4gIOQgieH2B09qzU8tPLTsbFT7E4TyPa7Kyycwa05s4XQ6Nx9nD2tWvb4e6vxFiqurOEX8E9b9Yovtpf01Y/vGH+/493h8Lcc+Cau+sUX20v6afvGH+/wCPc+FrXBZMJghpoXlpdBTwRPLTezKZHkm4n0Zlzt65TVfmqNk/9t2mmYoyVLUYpq573uE9Fc5znC+aW+4m/wBWuip0th4jL5/j3aM4ath4Ia/6xQ/bTfpqf3fD/f8AHufDVrFxeYOS2TRSU9Q+GR8lU6YGB7ntyDG1ufKaM+Yqo0liqL8xNH+2tixbmj5S+LjEwAqLWrWVVNLTMaKaOJ4nkkY/ZGudn+iw5ri3UtzA6QtWbWrXt8Pd5XbNVVWcIv4Ha/6xQ/bTfprc/drH3/Hu8/h610WHSbVpqWmJB2tTwQucDmLmMAJCoL12K781fRtU05U5Keq8T9fJK94nobnve4XzTX3E35/8NX1OlbEREfP8e7VmxU1eBq0PX0P2036Sy/dbH3/HujoKlk4t8GZrIoZaapfDJJJVOnBgc57cgxtbccpoz/RKqdI4mi/MTR/tr3s0TTtR7GNi8q7WtDbdPLSsj2CGO6aSRr8poN+ZrDm/itzB4+1atRTVt8Pd53LVVU5wi/gatD19D9tN+ktr91sff8e7DoKnHgatD6xQ/bTfpKP3Wx9/x7nQVHgbtD6xQ/bTfpJ+62Pv+Pc6CtvpsTVUfPVlKwf7eyyn8WtWFWl7MbIn8f8AbKMPUluDOLOjoHtnlc6uqGEOYZGiOnY4bjhHebzyk8ir8TpaquNWiMoe1GHiPnKZPdebzulU8zMznLZiFfYxcBam1qyOpp5aZjGUscJE8j2vy2vc4m5rDm+kFe4DH2rFrVq2+HCPu1LtmqurOEV8EVd9Yoftpv01u/u+H+/493n8NW79gYramCtp56iekdDDNHLI2OWRz3BjsrJALBu3Abq8r2lrNVuqmnPOY+3uypw1UTEy+nhhi2jrJHVNA9lNM8l0kEt4ge4nO5jgPoHdzXEci1sHpeKY1bnm9LuFz+dKFTYtrUa64UwkHGZUQZJ1uCtY0jh5jPW/EtfoK+D7tgYrXB4ktOVjY2kHa8DsuR/7LnjM0cl55N1aOK0zbojK3te1vCVTP8lj3BoaxjQyONrWRsaLmsYBcGgLl7tyq5VNVSyppimMocLzZCAgIJ7Ymiw82F3ejuy2+SlxHW1c3eW48RBGMMvKh5JO0Lmv1Btt+PoscDsq8EbXOt8QEBBm1Shm0qUNgKlDY0qWLMFSNgKlDMFSxZgqUMgVIzBRDIFShzeg5ykDKQcXoOCUGJKhLElEsCVAwJUJYEqGTWSoGDioS1kqGTW4qEsCoSwUJEBAQEE9sTRYebC7vR3ZbfJS4jraubvLceIgjeGUZuhf6AXsPKbiOwrnf1BROVuv6fOP6b+BnehGFzSxEBAQcgoMwVKGxpUobGlSxZgqUMwVKGYKlDMFShmCpQyBQcgqUOQ5BzlIGUg4ykHBKDglQliSgwJUJYEqEsCVCWBKhLBxUJa3FQyYEqEtZKhLhAQEBAQT+yIy2mhacxEbbxy513uBpmnD24nblCkvTncqmOLuLaeQg0VtK2eN0T/Jd6RutcNxwXhicPRiLc269ks7dyaKoqhC6+x5oCb2F7PQ9gLmke3g/iuNxOjr9ifnTnHGP98lvbxFFcfKXRyDwHUVp6lXB65wZB4DqKalXAzgyDwHUU1KuBnBkngOopq1cDOGQaeA6imrVwkzhmAeA6ip1Z4ShmAeA6ip1Z4IbADwHUp1Z4MWQB4DqU6s8BmAeA6k1Z4IZgHgOpTqzwQyAPAdSnKeCGQv4DqTKeCPkyF/AdSnKeAZ+AplPAc3HgOpMp4BceA6kyngGfgKZTwHBv4DqTKeAxN/AdSjKeB8mJB4DqTKeCWJB4DqUZTwSwIPAdSas8EsSDwHUVGrPBLAg8B1KNWeA1kHgOoqNWeDL5MCDwHUVGrPCU5sC08B1FRq1cJTnDHJPAdRTVq4GcGQeA6impVwM4Mg8B1FNSrgZwZB4DqKalXAzhy2NxNwa4ngAJKmLdczlET5EzEfV9uxrAe9wknbkRgghjvKf7CPQFdaP0RXXVFd6MqeH1n2hp38VERlRtS1dUrBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBB//Z"></IMDBLogo>
        </IMDBLink>
        <ItemContainer>
        <Item>{result.release_date ? result.release_date.substring(0, 4) : ""}
        </Item>
        <Divider>.</Divider>
        <Item>
        {result.runtime 
        ? result.runtime
        : "" || result.episode_run_time} min
        </Item>
        <Divider>.</Divider>
        <Item>
        {result.genres && 
            result.genres.map((genre, index) => 
                index === result.genres.length-1 
                    ? genre.name 
                    : `${genre.name} / `)}
        </Item>
        </ItemContainer>
        <Overview>
            
        </Overview>
        <ShowVideoBtn onClick={() => showPopUp(VideoContainer)}> Watch Trailers </ShowVideoBtn>
        <InfoTap 
        overview = {result.overview} 
        companies = {result.production_companies} 
        countries = {result.production_countries} 
        />
        
    </Data>
    </Content>
    </Container>
    )
);

DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

const showPopUp = (e) => {
    const videoContainer = document.getElementById("videoContainer")
    videoContainer.style.animation = "showPopUp 0.3s forwards ease-in-out";
    videoContainer.style.marginBottom = "100px"
}

const hidePopUp = (e) => {
    e.target.parentNode.style.animation = "hidePopUp 0.3s forwards ease-in-out";
    e.target.parentNode.style.marginBottom = "0px"
}

export default DetailPresenter;