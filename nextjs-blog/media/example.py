from pathlib import Path

from PIL import Image

size = (
    300,
    300,
)


def convert_file_to_jpg(infile):
    outfile = f"{Path(infile).stem}.jpg"
    if infile != outfile:
        try:
            with Image.open(infile) as img:
                img.thumbnail(size)
                img.save(outfile)
            return "ok"
        except OSError:
            return "unprocessable_entity"


# print(convert_file_to_jpg("./default.png"))
def list_files(__dirpath):
    return [x for x in __dirpath.iterdir() if x.is_file()]


def cleanup(__dirname):
    import subprocess

    subprocess.run(["rm", "-rf", Path(__dirname).parent])


def create_test_dir(__dirname):
    __path = Path(__dirname).mkdir(exist_ok=True, parents=True)
    # dir_files = list_files(__path)
    # cleanup(__dirname)


def list_files(__dirpath):
    return [x for x in __dirpath.iterdir() if x.is_file()]


def cleanup(__dirname):
    import subprocess

    subprocess.run(["rm", "-rf", Path(__dirname).parent])


@pytest.fixture(scope="session")
def create_test_dir(tmpdir_factory):
    __path = Path(__dirname).mkdir(exist_ok=True, parents=True)
    # dir_files = list_files(__path)
    # cleanup(__dirname)


print(create_test_dir("./test/profile_pics"))
